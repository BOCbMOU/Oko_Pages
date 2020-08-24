import React from 'react';
import styled from 'styled-components';
import { defaults } from '../consts';

const Sides = () => {
  return <StyledSides />;
};

export default Sides;

const sides = {
  color: '#111',
  space: 10,
};
const StyledSides = styled.div`
  position: absolute;
  left: -${sides.space}px;
  z-index: -1;

  width: ${defaults.width + sides.space * 2}px;
  height: 100%;

  background: ${sides.color};
`;
