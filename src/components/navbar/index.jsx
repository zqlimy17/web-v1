import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Wrapper>
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
  position: sticky;
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
    position: relative;
    nav {
      margin: 0 25px;
    }
  }
`;

export default Navbar;
