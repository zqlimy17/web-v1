import React from "react";
import styled from "styled-components";

const Resume = () => {
  return (
    <Wrapper>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button>Resume</button>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    border: 1px solid var(--secondary);
    padding: 0.5rem;
    background: none;
    color: var(--primary);
    cursor: pointer;
    transition: var(--transition);
  }

  button:hover {
    color: var(--secondary);
    background: var(--tint-secondary);
  }
`;

export default Resume;
