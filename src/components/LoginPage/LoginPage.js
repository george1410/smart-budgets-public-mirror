import React from 'react';
// import styled from 'styled-components';
// import media from '../../util/mediaQueries';
import Wrapper from './Wrapper';
import WideOnBoarding from './WideOnboarding/WideOnboarding';
import OneColOnboarding from './OneColOnboarding/OneColOnboarding';

const LoginPage = () => (
  <Wrapper>
    <WideOnBoarding />
    {/* <OneColOnboarding /> */}
  </Wrapper>
);

export default LoginPage;
