import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <path
            stroke="#39b874"
            fill-opacity="1"
            stroke-width="2"
            fill="rgba(0,0,0,0)"
            id="svg_1"
            d="m1.12387,31.49831l4.71564,-20.40623l19.0924,-9.08164l19.0924,9.08164l4.71573,20.40623l-13.21273,16.36463l-21.1908,0l-13.21264,-16.36463z"
          />
          <text
            transform="matrix(1.24086 0 0 1.24086 -325.034 -159.266)"
            stroke="#000"
            font-style="normal"
            font-weight="normal"
            text-anchor="start"
            font-family="sans-serif"
            font-size="31"
            id="svg_3"
            y="160.88533"
            x="273.5261"
            stroke-width="0"
            fill="#39b874"
          >
            Z
          </text>
        </g>
      </svg>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 75px;
  cursor: pointer;
  :hover svg g path {
    fill: var(--tint-secondary);
  }
`;
export default Logo;
