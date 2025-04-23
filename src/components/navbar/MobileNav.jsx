import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import Resume from "../Resume";

import { capitalize } from "@utils/capitalize";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["about", "experience", "portfolio", "contact"];

useEffect(() => {
  if (typeof document !== 'undefined') {
    open
      ? document.documentElement.classList.add("open")
      : document.documentElement.classList.remove("open");
  }
}, [open]);
  return (
    <Wrapper>
      <Hamburger open={open} setOpen={setOpen} />
      <aside className={`${open ? "open" : ""}`}>
        <ol className="mono">
          {navLinks.map((link) => {
            return (
              <li key={link}>
                <AnchorLink
                  onAnchorLinkClick={() => {
                    setOpen(false);
                  }}
                  className="anchorLink"
                  to={`/#${link}`}
                  title={capitalize(link)}
                  stripHash
                />
              </li>
            );
          })}
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
    font-size: 1.5em;
  }

  button {
    padding: 20px 20px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export default MobileNav;
