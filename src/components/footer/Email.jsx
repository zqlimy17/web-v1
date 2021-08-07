import React from "react";
import styled from "styled-components";

const Email = () => {
  return (
    <Wrapper className="fadeup" style={{ animationDelay: "1700ms" }}>
      <div>
        <a className="mono" href="mailto:zqlimy@gmail.com">
          zqlimy@gmail.com
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 40px;
  position: fixed;
  left: auto;
  right: 40px;
  bottom: 0;
  z-index: 3;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div a {
    padding: 10px;
    font-size: 1.25em;
    writing-mode: vertical-rl;
    color: var(--primary);
    text-decoration: none;
  }

  div a:hover {
    color: var(--secondary);
    transform: translateY(-3px);
  }

  div:after {
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    margin: 0px auto;
    background-color: var(--primary);
    margin-top: 10px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export default Email;
