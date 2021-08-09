import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <p className="bold">
          <span className="fade">Z</span>
          <span className="fade" style={{ animationDelay: "50ms" }}>
            Q
          </span>
          <span className="fade" style={{ animationDelay: "100ms" }}>
            L
          </span>
          <span className="fade" style={{ animationDelay: "150ms" }}>
            I
          </span>
          <span className="fade" style={{ animationDelay: "200ms" }}>
            M
          </span>
          <span className="fade" style={{ animationDelay: "250ms" }}>
            Y
          </span>
        </p>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
    font-size: 1.5rem;
    color: var(--secondary);
  }
`;
export default Logo;
