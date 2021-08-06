import React from "react";
import styled from "styled-components";

import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allContentfulPortfolio(filter: { featured: { eq: true } }) {
      nodes {
        featureImage {
          gatsbyImageData(
            layout: CONSTRAINED
            quality: 90
            placeholder: TRACED_SVG
            formats: AUTO
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

  console.log(featuredPortfolios);
  return (
    <Wrapper>
      <div>a</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    outline: 1px solid tan;
    outline-offset: -1px;
  }
`;

export default FeaturedPortfolio;
