import React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";

const AboutMe = () => {
  return (
    <Wrapper>
      <h2 className="numbered-headings">About Me</h2>
      <div className="container">
        <div id="about-content">
          <div>
            <div className="text-container">
              <p>
                Hi! My name is Zack Lim and I enjoy creating things that live on
                the internet. I started playing around with websites back in the
                late 2000s when Blogspot and Friendster was still a thing -
                turns out, changing the background image to your favourite
                character taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, I've had the priviledge to learn
                programming and started pursuing software at an{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  amazing school
                </a>
                , worked at a{" "}
                <a
                  href="https://mediaonemarketing.com.sg/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  startup agency
                </a>
                , and an{" "}
                <a
                  href="https://eatirvins.sg/"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  international e-commerce corporation
                </a>
                . Today, my focus is building accessible and product-driven
                websites for my clients.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <ul className="mono">
              <li>Javascript (ES6+)</li>
              <li>Shopify + Liquid</li>
              <li>GraphQL</li>
              <li>ReactJS</li>
              <li>VueJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
        </div>
        <StyledImg>
          <div className="imgWrapper">
            <StaticImage
              className="img"
              src="../../assets/images/me.jpeg"
              width={300}
              quality={90}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="zack lim"
            />
          </div>
        </StyledImg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* * {
    outline: 1px solid lime;
    outline-offset: -1px;
  } */
  max-width: 920px;
  margin: 0 auto;
  padding: 100px 0;
  transition: var(--transition);

  .container {
    display: flex;
    justify-content: space-between;
  }

  #about-content {
    max-width: 500px;
  }

  .text-container {
    font-size: 14px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
    color: var(--primary);
    font-size: 1.1em;
  }

  ul li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  ul li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--secondary);
    line-height: 12px;
  }

  @media only screen and (max-width: 1040px) {
    h2::after {
      width: 200px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 50px 0;

    h2::after {
      width: 200px;
    }

    .container {
      flex-direction: column-reverse;
    }
  }

  @media only screen and (max-width: 480px) {
    h2::after {
      width: 100%;
    }
  }
`;

const StyledImg = styled.div`
  position: relative;
  max-width: 300px;

  .imgWrapper {
    display: block;
    position: relative;
    border: none;
    width: 100%;
    background-color: var(--light-secondary);
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--secondary);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--dark-secondary);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0 auto 40px;
    .imgWrapper .img {
      mix-blend-mode: normal;
      filter: none;
    }
  }
`;
export default AboutMe;
