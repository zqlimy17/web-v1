import React from "react";
import styled from "styled-components";

import Intro from "@components/sections/Intro";
import AboutMe from "@components/sections/AboutMe";
import Experience from "@components/sections/Experience";
import FeaturedPortfolio from "@components/sections/FeaturedPortfolio";
import PortfolioList from "@components/sections/PortfolioList";
import GetInTouch from "@components/sections/GetInTouch";

import SEO from "@components/SEO";

const Main = () => {
  return (
    <Wrapper>
      <SEO
        title="Zack Lim | Portfolio & Resume"
        description="I am a full-stack software developer with a passion for dynamic development and high-quality codes. Currently, I'm focused on building accessible Shopify fronts at IRVINS."
      />
      <Intro />
      <AboutMe />
      <Experience />
      <FeaturedPortfolio />
      <PortfolioList />
      <GetInTouch />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 0 150px;
  @media only screen and (max-width: 1040px) {
    padding: 0 100px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 25px;
  }
`;

export default Main;
