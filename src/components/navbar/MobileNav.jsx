import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import Resume from "../Resume";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? document.body.classList.add("blur")
      : document.body.classList.remove("blur");
  }, [open]);

  return (
    <Wrapper>
      <Hamburger open={open} setOpen={setOpen} />
      <aside id="aa" className={`${open ? "open" : ""}`}>
        <ol>
          <li>
            <AnchorLink className="anchorLink" to="" title="About" stripHash />
          </li>
          <li>
            <AnchorLink
              className="anchorLink"
              to=""
              title="Experience"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              className="anchorLink"
              to=""
              title="Portfolio"
              stripHash
            />
          </li>
          <li>
            <AnchorLink
              className="anchorLink"
              to=""
              title="Contact"
              stripHash
            />
          </li>
        </ol>
        <Resume />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  aside {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    outline: 0px;
    width: min(75vw, 400px);
    background-color: var(--dark-purple);
    box-shadow: -10px 0px 30px -15px var(--dark-secondary);
    transform: translateX(100vw);
    visibility: hidden;
    transition: var(--slow-transition);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  aside.open {
    transform: translateX(0vw);
    visibility: visible;
  }

  ol {
    height: 60vh;
    flex-direction: column;
    justify-content: space-around;
  }

  button {
    padding: 15px;
  }

  @media only screen and (max-width: 480px) {
    display: flex;
  }
`;

export default MobileNav;
