import React from "react";
import styled from "styled-components";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const query = graphql`
  {
    allContentfulPortfolio(
      filter: { featured: { eq: true } }
      sort: { fields: publishDate, order: DESC }
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

const FeaturedPortfolio = () => {
  const data = useStaticQuery(query);
  const featuredPortfolios = data.allContentfulPortfolio.nodes;

  return (
    <Wrapper id="portfolio">
      <h2 className="numbered-headings">Some Things I’ve Built</h2>
      {featuredPortfolios.map((featuredPortfolio, index) => {
        const {
          title,
          about: { about },
          technologies: { technologies },
          publishDate,
          git,
          demo,
          featureImage,
        } = featuredPortfolio;

        const date = new Date(publishDate);
        const formattedDate = date.toLocaleString("default", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        const pathToImage = getImage(featureImage);

        return (
          <StyledPortfolio key={index}>
            <StyledInfo>
              <div>
                <p className="mono overline">
                  Featured Project {formattedDate}
                </p>
                {demo ? (
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <h3 className="bold">{title}</h3>
                  </a>
                ) : (
                  <h3 className="bold">{title}</h3>
                )}
                <div className="description">
                  <p>{about}</p>
                </div>
                <p className="mono">{technologies}</p>
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
            </StyledInfo>
            <StyledImage>
              <div className="imgWrapper">
                <GatsbyImage
                  className="gatsbyWrapper"
                  image={pathToImage}
                  alt={title}
                  imgClassName="img"
                />
              </div>
            </StyledImage>
          </StyledPortfolio>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 900px;
  margin: 100px auto;
  @media only screen and (max-width: 768px) {
    margin: 50px auto;
  }
`;

const StyledPortfolio = styled.article`
  display: flex;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    div {
      text-align: right;
      float: right;
    }
  }
  margin-bottom: 100px;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    margin-bottom: 50px;
    &:nth-of-type(even) {
      div {
        text-align: left;
        float: unset;
      }
    }
  }
`;

const StyledInfo = styled.div`
  flex: 1;
  flex-grow: 1;
  .overline {
    margin: 5px 0;
    color: var(--secondary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

  a:hover {
    color: var(--secondary);
  }

  .description {
    width: 105%;
    z-index: 1;
    position: relative;
    padding: 20px;
    margin: 20px 0;
    opacity: 0.9;
    background-color: var(--dark-secondary);
    border-radius: var(--border-radius);
    box-shadow: 0 0 5px var(--light-secondary);
    p {
      margin: 0;
    }

    @media only screen and (max-width: 768px) {
      box-shadow: none;
      display: flex;
      align-items: center;
      width: 100%;
      background-color: unset;
      padding: 0;
      opacity: 1;
    }
  }

  .links {
    margin-left: -10px;
    a {
      color: var(--primary);
      padding: 10px;
      &:hover {
        color: var(--secondary);
      }
      &::after {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 30px;
    z-index: 2;
    grid-column: 1 / -1;
    grid-area: 1 / 1 / -1 / -1;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  flex-grow: 2;
  .imgWrapper {
    margin: 0 auto;
    display: block;
    position: relative;
    border: none;
    width: 100%;
    background-color: var(--light-secondary);
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .gatsbyWrapper {
      height: 100%;
    }
    .img {
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--light-secondary);
      mix-blend-mode: screen;
    }

    @media only screen and (max-width: 768px) {
      height: 100%;
      z-index: 1;
      background-color: var(--dark-secondary);
      &:before {
        background-color: var(--dark-secondary);
        mix-blend-mode: screen;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    box-shadow: 0 0 5px var(--light-secondary);
    opacity: 0.6;
    display: block;
    grid-column: 1/ -1;
    grid-area: 1 / 1 / -1 / -1;
  }
`;

export default FeaturedPortfolio;
