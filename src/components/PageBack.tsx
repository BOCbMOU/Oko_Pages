import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { defaults } from '../consts';
import UserBar from './UserBar';

const PageBack: React.FunctionComponent = ({ children }) => (
  <StyledPageBack>
    <Sides />
    <UserBar />
    {children}
  </StyledPageBack>
);

PageBack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageBack;

const StyledPageBack = styled.div`
  position: relative;
  width: ${defaults.width}px;
  height: 100vh;
  margin: 0 auto;
`;

const sides = {
  space: 25,
  color: defaults.dark1,
};
const Sides = styled.div`
  position: absolute;
  left: -${sides.space}px;
  z-index: -1;

  width: ${defaults.width + sides.space * 2}px;
  height: 100%;

  background: ${sides.color};
`;
