import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";

const query = graphql`
  {
    allContentfulPortfolio(
      filter: { featured: { eq: false } }
      sort: { fields: publishDate, order: DESC }
      limit: 12
    ) {
      nodes {
        featureImage {
          gatsbyImageData(
            layout: CONSTRAINED
            quality: 90
            placeholder: TRACED_SVG
            formats: AUTO
            width: 800
          )
        }
        demo
        title
        technologies {
          technologies
        }
        git
        about {
          about
        }
        publishDate
      }
    }
  }
`;

const PortfolioList = () => {
  const data = useStaticQuery(query);
  const projects = data.allContentfulPortfolio.nodes;

  const [showMore, setShowMore] = useState(false);

  return (
    <Wrapper>
      <h2>Other Noteworthy Projects</h2>
      {/* <p className="mono">
        <a>View the archive</a>
      </p> */}
      <StyledList>
        {projects.map((project, index) => {
          const {
            title,
            about: { about },
            technologies: { technologies },
            publishDate,
            git,
            demo,
          } = project;

          const date = new Date(publishDate);
          const formattedDate = date.toLocaleString("default", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          let show = "";
          if (index >= 6) {
            show = showMore ? "show" : "hide";
          }

          const style = { transitionDelay: (index - 6) * 150 + "ms" };

          return (
            <CSSTransition
              key={index}
              in={show === "show"}
              timeout={500}
              classNames="fade"
            >
              <StyledCard
                multiplier={demo ? 1 : 0}
                style={style}
                hidden={show === "hide"}
              >
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={demo ? "link" : "no-link"}
                >
                  <p className="overline mono">{formattedDate}</p>
                  <div className="linksContainer">
                    <h3 className="bold">{title}</h3>
                    <div className="links">
                      {git ? (
                        <a href={git} target="_blank" rel="noopener noreferrer">
                          <FaGithub size={"1.25em"} />
                        </a>
                      ) : (
                        false
                      )}
                      {demo ? (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt size={"1.25em"} />
                        </a>
                      ) : (
                        false
                      )}
                    </div>
                  </div>
                  <p>{about}</p>
                  <p className="mono">{technologies}</p>
                </a>
              </StyledCard>
            </CSSTransition>
          );
        })}
      </StyledList>
      <button
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 40px;
  }
  p {
    margin-top: 12px;
  }

  button {
    margin: 20px 0;
    border: 1px solid var(--secondary);
    padding: 0.5rem;
    background: none;
    color: var(--primary);
    cursor: pointer;
    transition: var(--transition);
  }
  button:hover {
    color: var(--secondary);
    background: var(--tint-secondary);
  }
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 6fr));
  gap: 20px;
`;

const StyledCard = styled.div`
  text-align: left;
  background-color: var(--dark-secondary);
  border-radius: var(--border-radius);
  padding: 10px 20px;
  transition: var(--transition);

  &:hover {
    transform: translateY(calc(${({ multiplier }) => multiplier} * -4px));
    h3 {
      color: var(--secondary);
    }
  }
  .link,
  .no-link {
    color: var(--primary);
    &::after {
      display: none;
    }
  }

  .no-link {
    cursor: default;
    transform: none;
    &:hover {
      transform: none;
      h3 {
        color: var(--primary);
      }
    }
  }

  h3 {
    transition: var(--transition);
    color: var(--primary);
  }

  .linksContainer {
    display: flex;
    justify-content: space-between;
    .links {
      margin-right: -10px;
      a {
        color: var(--primary);
        padding: 0 10px;
        &:hover {
          color: var(--secondary);
        }
        &::after {
          display: none;
        }
      }
    }
  }
`;

export default PortfolioList;
