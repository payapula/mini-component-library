/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let height;
  let padding;
  let radius;
  if (size === "large") {
    height = 24;
    padding = 4;
    radius = 8;
  } else if (size === "medium") {
    height = 12;
    padding = 0;
    radius = 4;
  } else {
    height = 8;
    padding = 0;
    radius = 4;
  }

  return (
    <>
      <VisuallyHidden>
        <label for="progress-bar">Progress Bar</label>
      </VisuallyHidden>
      <Progress
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        id="progress-bar"
        style={{
          "--padding": padding + "px",
          "--radius": radius + "px",
        }}
      >
        <BarWrapper>
          <Bar
            style={{
              "--width": value + "%",
              "--height": height + "px",
            }}
          ></Bar>
        </BarWrapper>
      </Progress>
    </>
  );
};

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

export default ProgressBar;
