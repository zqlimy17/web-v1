import React from "react";
import styled from "styled-components";

const Hamburger = ({ open, setOpen }) => {
  return (
    <Wrapper>
      <button
        className={`fade hamburger hamburger--spin ${open ? "is-active" : ""}`}
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        style={{ animationDelay: "200ms" }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 100;
  .hamburger {
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    background-color: transparent;
    border: 0;
    overflow: visible;
  }

  .hamburger:focus {
    background-color: none;
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: var(--secondary);
  }

  .hamburger-box {
    width: 40px;
    height: 40px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: var(--secondary);
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export default Hamburger;
