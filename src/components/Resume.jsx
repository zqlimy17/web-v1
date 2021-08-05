import React from "react";
import styled from "styled-components";
import ResumePdf from "../assets/files/resume.pdf";

const Resume = () => {
  return (
    <Wrapper>
      <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
        <button>Resume</button>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    border: 1px solid var(--secondary);
    /* border-radius: 5px; */
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
