import React from 'react';
import styled from 'styled-components';
import { defaults } from '../consts';

const BigHeader = () => {
  return (
    <>
      <StyledHeader>
        <Top>
          <BackgroundSides />
          <Logo />
        </Top>
        <Bottom>
          <NavBar>
            <a href="/">Сводка</a>
            <a href="/">Игры</a>
          </NavBar>
        </Bottom>
      </StyledHeader>
    </>
  );
};

export default BigHeader;

const header = {
  width: defaults.width,
  height: 220,
  bottom: 30,
};
const StyledHeader = styled.header`
  position: relative;

  width: ${header.width}px;
  height: ${header.height}px;
  margin: 0 auto;
`;

const sides = {
  color: '#111',
};

const Top = styled.div`
  position: relative;

  width: 100%;
  height: ${header.height - header.bottom}px;

  background-image: url('backgrounds/savanna.jpg');
  background-position: 0% 59%;
`;

const BackgroundSides = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    to right,
    ${sides.color},
    ${sides.color}d 200px,
    ${sides.color}0 calc(200px + 20%),
    ${sides.color}0 80%,
    ${sides.color} 100%
  );
`;

const Logo = styled.img.attrs({ src: 'Oko_Logo_150px.png' })`
  position: absolute;
  left: 25px;
  top: 25px;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: ${header.bottom}px;

  background: #222;
`;

const NavBar = styled.nav`
  position: absolute;
  left: 200px;
  bottom: ${header.bottom - 13}px;

  > a {
    position: relative;
    margin-right: 25px;

    color: #fff;
    text-decoration: none;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #222;
  }

  > a:not(:last-child):after {
    content: '|';

    position: absolute;
    right: -20px;
    top: 2px;
  }
`;
