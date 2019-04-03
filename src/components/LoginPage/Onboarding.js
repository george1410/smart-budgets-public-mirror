import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../../util/mediaQueries';
import LoginSide from './LoginSide';
import Carousel from './Carousel/Carousel';
import Button from '../Button/Button';

const OnboardingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(97deg, rgba(0, 86, 255, 1) 0%, rgba(0, 86, 255, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
  width: 90vw;
  max-width: 100rem;
  min-height: 70rem;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  ${media.tablet`
    padding: 0 5rem 5rem 5rem;
    background: ${props => props.theme.white};
    width: 40rem;
    flex-direction: column;
  `}
  ${media.phone`
    padding: 5rem;
    width: 100%;
    height: 100%;
  `}
`;

const SkipButton = styled(Button)`
  display: none;
  ${media.tablet`
    display: block;
  `}
`;

const LoginSideWrapper = styled.div`
  padding: 5rem;
  width: 50%;
  height: 100%;
  ${media.tablet`
    padding: 0;
    width: 100%;
    display: ${props => (props.show ? 'block' : 'none')};
  `}
`;

const WideOnboarding = () => {
  const [showLogin, setShowLogin] = useState(localStorage.getItem('onboard') === 'true');
  const [buttonTitle, setButtonTitle] = useState(showLogin ? 'Go back to Intro' : 'Go to Log In');
  const toggleLogin = () => {
    setShowLogin(!showLogin);
    localStorage.setItem('onboard', !showLogin);
    const text = showLogin ? 'Go to Log In' : 'Go Back to Intro';
    setButtonTitle(text);
  };
  return (
    <OnboardingWrapper>
      <>
        <Carousel show={showLogin} />
        <LoginSideWrapper show={showLogin}>
          <LoginSide />
        </LoginSideWrapper>
        <SkipButton smallbtn highlight={!showLogin} title={buttonTitle} onClick={toggleLogin} />
      </>
    </OnboardingWrapper>
  );
};

export default WideOnboarding;
