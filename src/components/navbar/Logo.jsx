import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <p className="bold fade">ZQLIMY</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    font-size: 1.5rem;
    color: var(--secondary);
  }
`;
export default Logo;
