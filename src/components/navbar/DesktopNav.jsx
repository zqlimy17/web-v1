import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import Resume from "../Resume";
const DesktopNav = () => {
  return (
    <Wrapper className="mono">
      <ol>
        <div className="fade" style={{ animationDelay: "200ms" }}>
          <li>
            <AnchorLink className="anchorLink" to="" title="About" stripHash />
          </li>
        </div>
        <div className="fade" style={{ animationDelay: "400ms" }}>
          <li>
            <AnchorLink
              className="anchorLink"
              to=""
              title="Experience"
              stripHash
            />
          </li>
        </div>
        <div className="fade" style={{ animationDelay: "600ms" }}>
          <li>
            <AnchorLink
              className="anchorLink"
              to=""
              title="Portfolio"
              stripHash
            />
          </li>
        </div>
        <div className="fade" style={{ animationDelay: "800ms" }}>
          <li>
            <AnchorLink
              className="anchorLink"
              to=""
              title="Contact"
              stripHash
            />
          </li>
        </div>
      </ol>
      <div className="fade" style={{ animationDelay: "1000ms" }}>
        <Resume />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default DesktopNav;
