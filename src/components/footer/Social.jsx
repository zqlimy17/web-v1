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
    <Wrapper>
      <ul>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
        </li>
        <li>
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
    padding: 10px;
  }
`;

export default Social;
