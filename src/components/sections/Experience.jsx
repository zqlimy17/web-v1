import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
const query = graphql`
  {
    allContentfulExperience(sort: { fields: createdAt, order: DESC }) {
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
        <StyledTabList>
          {experiences &&
            experiences.map((experience, index) => {
              const { company } = experience;
              return (
                <StyledTabButton
                  key={index}
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
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @ {company}
                      </a>
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
  .container {
    display: flex;
  }
`;

const StyledTabList = styled.div``;
const StyledTabButton = styled.button``;
const StyledTabPanels = styled.div`
  margin-left: 25px;
  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`;
const StyledTabPanel = styled.div`
  h3 {
    line-height: 0;
  }
  p {
    line-height: 0;
    margin-bottom: 25px;
  }
`;

export default Experience;
