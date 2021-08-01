import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
`;

export default Navbar;
