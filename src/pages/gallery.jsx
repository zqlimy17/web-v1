import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import _ from "lodash";

const Gallery = ({ data }) => {
  const images = _.shuffle(data.allFile.nodes);
  return (
    <main>
      <Wrapper>
        <h1>People</h1>
        <p>I've been sharpened by these people to be better.</p>
        <StyledGallery>
          {images.map((image, index) => {
            const path = getImage(image);
            const style = { animationDelay: index * 100 + 400 + "ms" };
            return (
              <div className="imgContainer fadeup" style={style} key={index}>
                <GatsbyImage image={path} alt={image.name} imgClassName="img" />
              </div>
            );
          })}
        </StyledGallery>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  * {
    overflow: visible;
  }
  h1 {
    color: var(--primary);
  }

  @media only screen and (max-width: 1040px) {
    padding: 0 100px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 0px;
  }
`;

const StyledGallery = styled.div`
  line-height: 0;
  column-count: 5;
  column-gap: 0;

  @media only screen and (max-width: 1200px) {
    column-count: 4;
  }

  @media only screen and (max-width: 850px) {
    column-count: 3;
  }
  @media only screen and (max-width: 500px) {
    column-count: 2;
  }
  .imgContainer {
    padding: 4px;

    &:hover {
      transform: translateZ(0);
      position: relative;
      z-index: 2;
    }
    &:not(:hover) {
      transform: none;
    }

    .img {
      transition: var(--transition);
      transition-duration: 1200ms;
      z-index: 1;
    }
    .img:hover {
      z-index: 2;
      transform: scale(2);
    }
    .img:not(:hover) {
      transition-duration: 600ms;
    }
  }
`;

export const pageQuery = graphql`
  query GalleryQuery {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 90, width: 400)
        }
      }
    }
  }
`;
export default Gallery;
