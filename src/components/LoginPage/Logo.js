import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.png';

const StyledIcon = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 15rem;
  }
`;

const Icon = () => (
  <StyledIcon>
    <img alt="logo" src={Logo} />
  </StyledIcon>
);

export default Icon;
