import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

import Resume from "../assets/files/resume.pdf";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="fade">
          <Logo />
        </div>
        <div className="mono">
          <ol>
            <div className="fade" style={{ animationDelay: "200ms" }}>
              <li>
                <a>About</a>
              </li>
            </div>
            <div className="fade" style={{ animationDelay: "400ms" }}>
              <li>
                <a>Experience</a>
              </li>
            </div>
            <div className="fade" style={{ animationDelay: "600ms" }}>
              <li>
                <a>Portfolio</a>
              </li>
            </div>
            <div className="fade" style={{ animationDelay: "800ms" }}>
              <li>
                <a>Contact</a>
              </li>
            </div>
          </ol>
          <div className="fade" style={{ animationDelay: "1000ms" }}>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button>Resume</button>
            </a>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 100px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;

  nav {
    margin: 0 50px;
  }

  div {
    display: flex;
    align-items: center;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
  }

  ol {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  ol li {
    counter-increment: navItem;
  }

  ol li a {
    padding: 10px;
    color: var(--primary);
    cursor: pointer;
  }

  ol li a:hover {
    transition: var(--transition);
    color: var(--secondary);
  }

  ol li a::before {
    content: "0" counter(navItem) ".";
    color: var(--secondary);
    margin-right: 5px;
    text-align: right;
  }

  button {
    border: 1px solid var(--secondary);
    border-radius: 5px;
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

  @keyframes fade {
    from {
      opacity: 0.01;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade {
    animation-name: fade;
    animation-duration: 1000ms;
    animation-fill-mode: backwards;
  }
`;

export default Navbar;
