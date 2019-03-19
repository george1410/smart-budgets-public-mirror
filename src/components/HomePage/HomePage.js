import React from 'react';
import Header from '../Header/Header';
import Wrapper from './Wrapper';
import StyledLink from './StyledLink';

const Home = () => (
  <>
    <Header title="Home" />
    <Wrapper>
      <p>This will be the social / home page</p>
      <StyledLink to="/add">Find Friends</StyledLink>
      <StyledLink to="/friends">Show Friends</StyledLink>
    </Wrapper>
  </>
);

export default Home;
