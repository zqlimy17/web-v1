import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
const GetInTouch = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  });
  return (
    <Wrapper id="contact" ref={revealContainer}>
      <p className="mono overline numbered-headings">What's next?</p>
      <h2 className="bold">Get In Touch</h2>
      <p>
        Although I'm not currently looking for any new job opportunities, I'm
        available to freelance - specialising in ReactJS or other frontend
        frameworks and for Shopify. Whether you have a question or just want to
        say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:zqlimy@gmail.com" target="_blank">
        <button className="bold">Say Hello!</button>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 600px;
  margin: 200px auto;
  text-align: center;
  & > .numbered-headings {
    display: block;
    text-align: center;
    color: var(--secondary);
  }

  & > .numbered-headings::after {
    display: none;
  }

  h2 {
    font-size: 3em;
    margin: 20px;
  }

  button {
    font-size: 2em;
    margin: 40px 0;
    border: 1px solid var(--secondary);
    padding: 1rem;
    background: none;
    color: var(--primary);
    cursor: pointer;
    transition: var(--transition);
  }

  button:hover {
    color: var(--secondary);
    background: var(--tint-secondary);
  }

  a::after {
    display: none;
  }
`;

export default GetInTouch;
