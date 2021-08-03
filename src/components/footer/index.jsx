import React from "react";
import Social from "./Social";
import Email from "./Email";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Social />
        <Email />
      </div>
      <p className="mono">
        Design inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Brittany Chiang
        </a>
        . Built by Zack Lim.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  div {
    z-index: 1;
    position: sticky;
    bottom: 0;
  }

  p {
    text-align: center;
    color: var(--primary);
  }

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

export default Footer;
