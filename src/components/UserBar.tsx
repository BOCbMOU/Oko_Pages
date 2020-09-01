import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { defaults } from '../consts';

const UserBar = () => (
  <StyledUserBar>
    <UserBarSection>
      <UserBarImage src="/Post_Icon.png" />
    </UserBarSection>
    <UserBarSection>
      <UserBarAvatar />
      <UserBarLink to="/">Username</UserBarLink>
    </UserBarSection>
  </StyledUserBar>
);

export default UserBar;

const StyledUserBar = styled.div`
  position: fixed;
  top: 0;
  right: calc(50% - ${defaults.width / 2}px);
  z-index: 1000;
`;

const UserBarSection = styled.div`
  display: inline-flex;
  height: 30px;
  padding: 5px 6px;

  background: ${defaults.dark1}c;

  ~ div {
    margin-left: 2px;
  }
`;

const image = {
  size: 30,
};
const UserBarImage = styled.img`
  max-width: ${image.size}px;
  max-height: ${image.size}px;
`;
const UserBarAvatar = styled(UserBarImage).attrs({
  src: '/users/Lion Ava.png',
})`
  margin-right: 8px;

  border-radius: ${image.size / 2}px;
`;

const UserBarLink = styled(Link)`
  vertical-align: middle;

  line-height: 30px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;

  color: ${defaults.text2};
`;
