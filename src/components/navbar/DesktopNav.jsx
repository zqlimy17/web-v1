import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import Resume from "../Resume";

import { capitalize } from "../../utils/capitalize";

const DesktopNav = () => {
  const navLinks = ["about", "experience", "portfolio", "contact"];
  return (
    <Wrapper className="mono">
      <ol>
        {navLinks.map((link, index) => {
          const style = { animationDelay: (index + 1) * 200 + "ms" };
          return (
            <div className="fade" style={style}>
              <li>
                <AnchorLink
                  className="anchorLink"
                  to={`/#${link}`}
                  title={capitalize(link)}
                  stripHash
                />
              </li>
            </div>
          );
        })}
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
