import styled from "styled-components";
import { Fixed } from "../theme/grid";
import { Link } from "react-router-dom";
import { color3, color4, white } from "../theme/variables";
import { A } from "../theme/types";

export const Container = styled(Fixed)`
  right: 10vh;
  top: 28px;
  z-index: 99;
  padding: 7px;
`;

export const StyledLink = styled(Link)`
  margin-left: 20px;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: ${color4};
  }
  &:after {
    content: " ";
    z-index: -1;
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 0;
    transition: height 0.3s;
  }

  &:hover::after {
    height: 100%;
    background-color: ${color3};
    transform: scale(1, 1.6);
  }
`;

export const StyledA = styled(A)`
  margin-left: 20px;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: ${color4};
  }
  &:after {
    content: " ";
    z-index: -1;
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 0;
    transition: height 0.3s;
  }

  &:hover::after {
    height: 100%;
    background-color: ${color3};
    transform: scale(1, 1.6);
  }
`;
