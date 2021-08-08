import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";

import styled from "styled-components";

const Social = () => {
  return (
    <Wrapper className="fadeup" style={{ animationDelay: "1200ms" }}>
      <ul>
        <li className="fadeup" style={{ animationDelay: "1200ms" }}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </li>
        <li className="fadeup" style={{ animationDelay: "1300ms" }}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
        </li>
        <li className="fadeup" style={{ animationDelay: "1400ms" }}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
        </li>
        <li className="fadeup" style={{ animationDelay: "1500ms" }}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaHackerrank size={28} />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 40px;
  position: fixed;
  left: 40px;
  right: auto;
  bottom: 0;
  z-index: 3;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul:after {
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    margin: 0px auto;
    background-color: var(--primary);
    margin-top: 10px;
  }

  ul li {
    display: inherit;
    transition: var(--transition);
    padding: 10px;
  }

  ul li a {
    color: var(--primary);
    &::after {
      display: none;
    }
  }

  ul li a:hover {
    color: var(--secondary);
    transform: translateY(-3px);
    display: block;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    left: auto;
    right: auto;

    ul {
      flex-direction: row;
      justify-content: center;
    }

    ul:after {
      display: none;
    }
  }
`;

export default Social;
