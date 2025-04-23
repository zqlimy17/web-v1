import React, { useState, useRef, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { CSSTransition } from "react-transition-group";
import { srConfig } from "@config";
import sr from "@utils/sr";
const query = graphql`
  {
    allContentfulPortfolio(
      filter: {featured: {eq: false}}
      sort: {publishDate: DESC}
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
  const revealContainer = useRef(null);
  const revealItems = useRef([]);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
    revealItems.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  });
  const data = useStaticQuery(query);
  const projects = data.allContentfulPortfolio.nodes;

  const [showMore, setShowMore] = useState(false);

  const handleLink = (demo) => {
    if (demo) {
      window.open(demo);
    }
  };
  return (
    <Wrapper ref={revealContainer}>
      <h2 className="bold">Other Noteworthy Projects</h2>
      <p className="mono">
        <Link to="/archive">View the archive</Link>
      </p>
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

          let show = index >= 6 ? (showMore ? "show" : "hide") : false;
          let refFx =
            index < 6
              ? (el) => {
                  revealItems.current[index] = el;
                }
              : () => {
                  return;
                };
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
                onClick={() => {
                  handleLink(demo);
                }}
                ref={(el) => {
                  refFx(el);
                }}
              >
                <p className="overline mono">{formattedDate}</p>
                <div className="linksContainer">
                  <h3 className="bold title">{title}</h3>

                  <div className="links">
                    {git ? (
                      <a href={git} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={"1.25em"} />
                      </a>
                    ) : (
                      false
                    )}
                    {demo ? (
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={"1.25em"} />
                      </a>
                    ) : (
                      false
                    )}
                  </div>
                </div>
                <p>{about}</p>
                <p className="mono">{technologies}</p>
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
  margin: 50px auto;
  text-align: center;
  h2 {
    /* margin-bottom: 40px; */
  }
  p {
    margin: 20px 0;
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
  cursor: pointer;
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

  .title {
    max-width: 60%;
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
        @media only screen and (max-width: 768px) {
          color: var(--secondary);
        }
      }
    }
  }
`;

export default PortfolioList;
