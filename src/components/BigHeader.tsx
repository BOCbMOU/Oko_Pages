import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="active-tab">
              Главная
            </Link>
            <NavSeparator />
            <Link to="/">Игры</Link>
            <NavSeparator />
            <Link to="/">Правила</Link>
          </NavBar>
          <SearchField
            onSubmit={(event) => {
              event.preventDefault();
            }}
          />
        </Bottom>
      </StyledHeader>
    </>
  );
};

export default BigHeader;

const header = {
  width: defaults.width,
  height: 230,
  bottom: 30,
};
const StyledHeader = styled.header`
  position: relative;

  width: ${header.width}px;
  height: ${header.height}px;
  margin: 0 auto;
`;

const sides = {
  color: defaults.dark1,
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
    ${sides.color}e 200px,
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

  background: ${defaults.dark3};
`;

const NavBar = styled.nav`
  position: absolute;
  left: 200px;
  bottom: ${header.bottom - 13}px;

  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: 2px;

  color: ${defaults.text};
  text-transform: uppercase;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${defaults.dark3};

  > a {
    position: relative;
    z-index: 0;

    color: ${defaults.text};
    text-decoration: none;
  }

  > a.active-tab::before {
    content: '';

    position: absolute;
    left: -4px;
    bottom: 18px;
    width: calc(100% + 6px);
    z-index: -1;

    border-bottom: 4px solid ${defaults.dark3};
  }

  > a.active-tab::after {
    content: '';

    position: absolute;
    left: -4px;
    bottom: -12px;
    width: calc(100% + 6px);
    z-index: -1;

    border-bottom: 4px solid ${defaults.dark1};
  }
`;

const NavSeparatorSpan = styled.span`
  position: relative;
  top: -2px;
  margin: 0 10px;

  cursor: default;
`;

const NavSeparator = () => <NavSeparatorSpan>|</NavSeparatorSpan>;

const SearchField = styled.input.attrs({ placeholder: 'Найти...' })`
  position: absolute;
  top: -12px;
  right: 16px;
  width: 150px;
  padding: 1px 4px;

  border: 2px solid ${defaults.dark3};

  color: ${defaults.text};
  background: ${defaults.dark2};

  transition: background 100ms ease-out;

  ::placeholder {
    color: #ccc;
  }

  :focus {
    background: ${defaults.dark1};
  }
`;
