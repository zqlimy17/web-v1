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
    <Wrapper>
      <h2 className="numbered-headings">Some Things I’ve Built</h2>
      {featuredPortfolios.map((featuredPortfolio, index) => {
        console.log(featuredPortfolio);

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
          <StyledPortfolio key="index">
            <StyledInfo>
              <p className="mono overline">Featured Project {formattedDate}</p>
              <h3 className="bold">{title}</h3>
              <div className="description">
                <p>{about}</p>
              </div>
              <p className="mono">{technologies}</p>
              <div className="links">
                {git ? (
                  <a href={git} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28} />
                  </a>
                ) : (
                  false
                )}
                {demo ? (
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={28} />
                  </a>
                ) : (
                  false
                )}
              </div>
            </StyledInfo>
            <StyledImage>
              <div className="imgWrapper">
                <GatsbyImage
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
`;
const StyledInfo = styled.div`
  flex: 1;
  flex-grow: 1;
  .overline {
    margin: 5px 0;
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
    p {
      margin: 0;
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
  }
`;

export default FeaturedPortfolio;
