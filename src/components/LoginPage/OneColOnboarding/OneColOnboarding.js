import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../../util/mediaQueries';
import LoginSide from '../LoginSide';
import Carousel from '../Carousel/Carousel';
import Button from '../../Button/Button';

const OnboardingWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background: linear-gradient(97deg, rgba(0, 86, 255, 1) 0%, rgba(0, 86, 255, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
  width: 90vw;
  max-width: 120rem;
  height: 80rem;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 5rem;
  ${media.tablet`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.white};
    justify-content: space-around;
    max-width: 40rem;
  `}
  ${media.phone`
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
  `}
`;

const OneColOnboarding = () => {
  const [showLogin, setShowLogin] = useState(localStorage.getItem('onboard'));
  const [buttonTitle, setButtonTitle] = useState('Go to Log In');
  const toggleLogin = () => {
    const toOnboard = localStorage.getItem('onboard');
    localStorage.setItem('onboard', !toOnboard);
    setShowLogin(!showLogin);
    const text = !showLogin ? 'Go Back' : 'Go to Log In';
    setButtonTitle(text);
  };
  return (
    <OnboardingWrapper>
      {
        console.log(showLogin)
      }
      {
        showLogin
          ? <LoginSide />
          : <Carousel />
      }
      <Button altbtn title={buttonTitle} onClick={toggleLogin} />
    </OnboardingWrapper>
  );
};

OneColOnboarding.defaultProps = {};

OneColOnboarding.propTypes = {};

export default OneColOnboarding;
