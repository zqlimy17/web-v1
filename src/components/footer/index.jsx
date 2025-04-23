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
        Zack
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

  .mobile-break {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobile-break {
      display: block;
    }
    position: relative;
  }
`;

export default Footer;
