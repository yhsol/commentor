import React from "react";
import styled, { css } from "styled-components";
import { WithProps } from "./WithProps";

export const Transition = styled.div<WithProps>`
  text-align: center;
  height: 2rem;
  ${props =>
    props.fontsize &&
    css`
      font-size: 14px;
    `}
  &:after {
    content: "";
    display: block;
    padding-bottom: 1rem;
    width: 0;
    height: 2px;
    border-bottom: 2px solid ${props => props.theme.uiColorBlue};
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    /* transition: width 0.3s; */
  }
`;
