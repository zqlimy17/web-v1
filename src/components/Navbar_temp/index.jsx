import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useScrollDirection } from "@hooks";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setScrolledToTop(window.pageYOffset < 50);
    } else {
      setScrolledToTop(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Wrapper scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <nav>
        <div className="fade">
          <Logo />
        </div>
        <DesktopNav />
        <MobileNav />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  height: 100px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(4px);
  transition: var(--transition);

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: 60px;
      transform: translateY(0px);
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: 60px;
      transform: translateY(-60px);
      @media only screen and (max-width: 768px) {
        height: 100px;
        transform: translateY(-100px);
      }
    `};

  nav {
    margin: 0 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
  }

  @media only screen and (max-width: 1040px) {
    nav {
      margin: 0 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 100px;

    nav {
      margin: 0 25px;
    }
  }
`;

export default Navbar;
