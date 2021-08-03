import React from "react";
import Social from "./Social";
import Email from "./Email";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Social />
      <Email />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  z-index: 1;
  position: sticky;
  bottom: 0;
`;

export default Footer;
