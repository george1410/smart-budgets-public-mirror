import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../../util/mediaQueries';
import LoginSide from './LoginSide';
import Wrapper from './Wrapper';

const OnboardingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(97deg, rgba(0, 86, 255, 1) 0%, rgba(0, 86, 255, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
  width: 90rem;
  min-height: 70rem;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  ${media.tablet`
    /* width: 40rem; */
    background: ${props => props.theme.white};
  `}
`;

const Placeholder = styled.div`
  min-height: 70rem;
  min-width: 40rem;
  /* background-color: salmon; */
  ${media.tablet`
    display: none;
  `}
`;

const LoginPage = () => {
  const [] = useState();
  return (
    <Wrapper>
      <OnboardingWrapper>
        <Placeholder />
        <LoginSide />
      </OnboardingWrapper>
    </Wrapper>
  );
};

export default LoginPage;
