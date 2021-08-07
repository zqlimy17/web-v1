import React from "react";

import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <div>
        <div className="mono fadeup" style={{ animationDelay: "1000ms" }}>
          <p>Hey there, my name is</p>
        </div>
        <div className="bold fadeup" style={{ animationDelay: "1100ms" }}>
          <h1 className="heading">Zack Lim.</h1>
        </div>
        <div className="bold fadeup" style={{ animationDelay: "1200ms" }}>
          <h2 className="heading">I build friendly interfaces.</h2>
        </div>
        <div>
          <p className="fadeup" style={{ animationDelay: "1300ms" }}>
            I am a full-stack software developer with a passion for dynamic
            development and high quality codes.
          </p>
          <p className="fadeup" style={{ animationDelay: "1400ms" }}>
            Currently, I'm focused on building accessible Shopify fronts at{" "}
            <a href="https://eatirvins.sg">IRVINS</a>.
          </p>
        </div>
        <div className="fadeup" style={{ animationDelay: "1500ms" }}>
          <button>Get in touch.</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  transition: var(--slow-transition);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
  margin-top: -100px;
  margin-left: 150px;
  margin-right: 150px;

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
    /* border-radius: 5px; */
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

  @media only screen and (max-width: 1440px) {
    margin-left: 100px;
    margin-right: 100px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export default Intro;
