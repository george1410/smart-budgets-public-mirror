import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../../util/mediaQueries';
import LoginSide from './LoginSide';
import Wrapper from './Wrapper';
import Carousel from './Carousel/Carousel';

const OnboardingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(97deg, rgba(0, 86, 255, 1) 0%, rgba(0, 86, 255, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
  width: 90vw;
  max-width: 120rem;
  min-height: 70rem;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  ${media.tablet`
    background: ${props => props.theme.white};
    max-width: 40rem;
  `}
  ${media.phone`
    max-width: 100vw;
    width: 100vw;
  `}
`;

const Placeholder = styled.div`
  min-height: 70rem;
  width: 45vw;
  max-width: 60rem;
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
        <Carousel />
        <LoginSide />
      </OnboardingWrapper>
    </Wrapper>
  );
};

export default LoginPage;
