import React from 'react';
import { StyledWrapper } from "./Container.styled";

function Container({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Container;