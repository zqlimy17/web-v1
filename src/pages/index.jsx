import React from "react";
import Intro from "../components/sections/Intro";

import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Intro />
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
