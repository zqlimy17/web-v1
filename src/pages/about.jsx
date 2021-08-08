import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import _ from "lodash";

const About = ({ data }) => {
  const images = _.shuffle(data.allFile.nodes);
  return (
    <main>
      <Wrapper>
        <h1>People</h1>
        <p>I've been sharpened by these people to be better.</p>
        <Gallery>
          {images.map((image, index) => {
            const path = getImage(image);
            const style = { animationDelay: index * 100 + 400 + "ms" };
            return (
              <div className="img fadeup" style={style} key={index}>
                <GatsbyImage image={path} alt={image.name} />
              </div>
            );
          })}
        </Gallery>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 100px 150px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  h1 {
    color: var(--primary);
  }

  @media only screen and (max-width: 1040px) {
    margin: 100px 100px;
  }
  @media only screen and (max-width: 768px) {
    margin: 100px 50px;
  }
  @media only screen and (max-width: 480px) {
    margin: 100px 0px;
  }
`;

const Gallery = styled.div`
  line-height: 0;
  column-count: 5;
  column-gap: 0;

  @media only screen and (max-width: 1040px) {
    column-count: 4;
  }
  @media only screen and (max-width: 768px) {
    column-count: 3;
  }
  @media only screen and (max-width: 480px) {
    column-count: 2;
  }
  .img {
    margin: 8px 4px;
  }
`;

export const pageQuery = graphql`
  query AboutQuery {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 90, width: 400)
        }
      }
    }
  }
`;
export default About;
