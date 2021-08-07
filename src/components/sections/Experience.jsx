import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
const query = graphql`
  {
    allContentfulExperience(sort: { fields: date, order: DESC }) {
      nodes {
        company
        description
        range
        title
        companyUrl
      }
    }
  }
`;
const Experience = () => {
  const data = useStaticQuery(query);
  const experiences = data.allContentfulExperience.nodes;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Wrapper>
      <h2 className="numbered-headings">Experience</h2>
      <div className="container">
        <StyledTabNav activeTab={activeTab} />
        <StyledTabList length={experiences.length}>
          {experiences &&
            experiences.map((experience, index) => {
              const { company } = experience;
              return (
                <StyledTabButton
                  key={index}
                  className={`${activeTab === index ? "active" : ""} bold`}
                  onClick={() => {
                    setActiveTab(index);
                  }}
                >
                  {company}
                </StyledTabButton>
              );
            })}
        </StyledTabList>
        <StyledTabPanels>
          {experiences &&
            experiences.map((experience, index) => {
              const { title, company, description, range, companyUrl } =
                experience;
              console.log(experience);
              return (
                <CSSTransition
                  key={index}
                  in={activeTab === index}
                  timeout={500}
                  classNames="fade"
                >
                  <StyledTabPanel hidden={activeTab !== index}>
                    <h3>
                      {title}{" "}
                      {companyUrl ? (
                        <a
                          href={companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @ {company}
                        </a>
                      ) : (
                        <>@ {company}</>
                      )}
                    </h3>

                    <p className="range">{range}</p>
                    <ul>
                      {description.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 100px 0;
  max-width: 768px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding: 25px 0;
  }
  .container {
    display: flex;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

const StyledTabList = styled.div`
  height: 100%;
  border-left: 2px solid var(--dark-secondary);
  @media only screen and (max-width: 600px) {
    width: calc(${({ length }) => length} * 120px);
    display: flex;
    overflow-x: auto;
    border-left: none;
    border-bottom: 2px solid var(--dark-secondary);
    margin-bottom: 20px;
  }
`;

const StyledTabButton = styled.button`
  background: none;
  border: none;
  width: 120px;
  min-width: 120px;
  height: 40px;
  color: var(--primary);
  transition: var(--transition);
  :hover {
    background-color: var(--tint-secondary);
  }
  &.active {
    color: var(--secondary);
    background-color: var(--tint-secondary);
  }

  @media only screen and (max-width: 600px) {
  }
`;

const StyledTabNav = styled.div`
  content: "";
  height: 40px;
  position: absolute;
  width: 2px;
  background-color: var(--secondary);
  transform: translateY(calc(${({ activeTab }) => activeTab} * 40px));
  transition: var(--transition);
  transition-delay: 100ms;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    transform: translate(calc(${({ activeTab }) => activeTab} * 120px), 40px);
    width: 120px;
    height: 2px;
  }
`;

const StyledTabPanels = styled.div`
  margin-left: 25px;
  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`;
const StyledTabPanel = styled.div`
  h3 {
    margin: 0;
  }
  p {
    margin-bottom: 25px;
  }
`;

export default Experience;
