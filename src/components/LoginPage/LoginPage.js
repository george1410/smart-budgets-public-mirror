import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const LoginPage = () => (
  <Wrapper>
    <Link to="/home">Log In</Link>
  </Wrapper>
);

export default LoginPage;
