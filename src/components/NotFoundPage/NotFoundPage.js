import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const FourOhFour = styled.div`
  position: absolute;
  color: #F1F1F1;
  width: 100vw;
  text-align: center;
  font-size: 25rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet`font-size: 20rem;`}
  ${media.phone`font-size: 15rem;`}
`;

const Message = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 2rem;
  text-align: center;
  color: #333;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 70vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  color: #000;
  font-size: 1.5rem;
  text-decoration: none;
  border-bottom: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border-bottom: 1px solid #fff;
  }

  &:active {
    transform: translate(-50%, -35%);
  }
`;

const index = () => (
  <Wrapper>
    <Message>This is not the page you are looking for</Message>
    <FourOhFour>404</FourOhFour>
    <StyledLink to="/social">Back Home</StyledLink>
  </Wrapper>
);

export default index;
