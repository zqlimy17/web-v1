import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1 className="bold">404</h1>
      <h2>Aiyo, this page like broken leh!</h2>
      <Link to={"/"} className="link">
        <button>Go Home</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  h1 {
    margin: 0;
    font-size: 10em;
    color: var(--secondary);
  }
  button {
    cursor: pointer;
    color: var(--primary);
    border-radius: 0;
    border: 1px solid var(--secondary);
    background-color: transparent;
    margin: 20px;
    padding: 20px 30px;
  }

  button:hover {
    background-color: var(--tint-secondary);
  }
  .link::after {
    display: none;
  }
`;

export default NotFoundPage;
