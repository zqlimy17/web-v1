import React from "react";

import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <div>
        <div className="mono">
          <p>Hi, my name is</p>
        </div>
        <div className="bold">
          <h1 className="heading">Zack Lim.</h1>
        </div>
        <div className="bold">
          <h2 className="heading">I like to build friendly interfaces.</h2>
        </div>
        <div>
          <p>
            I am a full-stack software developer with a passion for dynamic
            development and high quality codes.
          </p>
          <p>
            Currently, I'm focused on building accessible Shopify fronts at{" "}
            <a href="https://eatirvins.sg">IRVINS</a>.
          </p>
        </div>
        <div>
          <button>Get in touch.</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;

  h1 {
    font-size: clamp(40px, 6vw, 75px);
    margin: 0;
  }

  h2 {
    font-size: clamp(30px, 4vw, 60px);
    margin: 0;
  }

  p {
    max-width: 480px;
  }

  button {
    margin-top: 24px;
    border-radius: 5px;
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
`;

export default Intro;
