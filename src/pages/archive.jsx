import React, { useRef, useEffect } from "react";

import { graphql } from "gatsby";
import styled from "styled-components";

import { srConfig } from "@config";
import sr from "@utils/sr";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Archive = ({ data }) => {
  const revealItems = useRef([]);
  const archives = data.allContentfulPortfolio.nodes;

  useEffect(() => {
    revealItems.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(100, 0.95))
    );
  }, []);

  return (
    <main>
      <Wrapper>
        <div className="heading fadeup">
          <h1 className="bold">Archive</h1>
          <p className="mono">A list of things I've worked on</p>
        </div>
        <table className="fadeup" style={{ animationDelay: "200ms" }}>
          <thead>
            <tr className="bold">
              <th>Year</th>
              <th>Title</th>
              <th className="technologies">Built With</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {archives.map((archive, index) => {
              const {
                title,
                // about: { about },
                technologies: { technologies },
                git,
                demo,
                publishDate,
              } = archive;
              const date = new Date(publishDate);
              return (
                <tr
                  key={index}
                  className="tableRow"
                  ref={(el) => (revealItems.current[index] = el)}
                >
                  <td className="mono">{date.getFullYear()}</td>
                  <td className="bold">{title}</td>
                  <td className="technologies mono">{technologies}</td>
                  <td className="linksContainer">
                    {git ? (
                      <a
                        href={git}
                        className="links"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={"1.25em"} />
                      </a>
                    ) : (
                      <FaGithub size={"1.25em"} className="spacer" />
                    )}
                    {demo ? (
                      <a
                        href={demo}
                        className="links"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt size={"1.25em"} />
                      </a>
                    ) : (
                      <FaExternalLinkAlt size={"1.25em"} className="spacer" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin: 100px 250px;

  .heading {
    padding: 90px 0 50px 0;
    h1 {
      color: var(--primary);
      font-size: 4em;
      line-height: 0;
      margin-bottom: 1em;
    }
    p {
      color: var(--secodary);
    }
  }
  table {
    text-align: left;
    margin: -10px;
    border-collapse: separate;
    border-spacing: 0 10px;
    td,
    th {
      padding: 10px;
    }
    th {
      color: var(--secondary);
    }
    .tableRow {
      transition: var(--transition);
      .mono {
        color: var(--secondary);
      }
      .technologies {
        color: var(--primary);
      }
      .linksContainer {
        display: flex;
        justify-content: space-between;
        min-width: 50px;

        .links {
          color: var(--primary);
          &:hover {
            color: var(--secondary);
          }
          &::after {
            display: none;
          }
          a {
            padding: 0 12px;
            @media only screen and (max-width: 768px) {
              color: var(--secondary);
            }
          }
        }
        .spacer {
          visibility: hidden;
        }
      }
    }

    .tableRow:hover {
      background-color: var(--dark-secondary);
    }
  }

  @media only screen and (max-width: 1040px) {
    margin: 100px 100px;
  }
  @media only screen and (max-width: 768px) {
    margin: 100px 50px;
  }
  @media only screen and (max-width: 600px) {
    .technologies {
      display: none;
    }
    margin: 50px 25px;
  }
  @media only screen and (max-width: 480px) {
    margin: 25px 15px;
  }
`;

export const query = graphql`
  query Archive {
    allContentfulPortfolio(sort: {publishDate: DESC}) {
      nodes {
        title
        demo
        git
        about {
          about
        }
        technologies {
          technologies
        }
        publishDate
        featureImage {
          gatsbyImageData(placeholder: TRACED_SVG, quality: 90)
        }
      }
    }
  }
`;

export default Archive;
