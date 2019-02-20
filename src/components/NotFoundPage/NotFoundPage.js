import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  overflow: hidden;
`;

const FourOhFour = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  height: 100vh;
  width: 100vw;
  text-align: center;
  font-size: 35rem;
  ${media.tablet`font-size: 25rem;`}
  ${media.phone`
    flex-direction: column;
  `}
`;

const Message = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${props => props.theme.primaryBlue};
  padding: 1.5rem 2.5rem;
  color: ${props => props.theme.white};
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 1.8rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 70vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 1.5rem 2.5rem;
  color: #000;
  font-size: 1.8rem;
  text-decoration: none;
  border-bottom: 1px solid #000;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.primaryBlue};
    color: #fff;
    border-bottom: 1px solid ${props => props.theme.primaryBlue};
  }

  &:active {
    transform: translate(-50%, -45%);
  }
`;

const index = () => (
  <Wrapper>
    <Message>This is not the page you are looking for</Message>
    <FourOhFour>
      <div>4</div>
      <div>0</div>
      <div>4</div>
    </FourOhFour>
    <StyledLink to="/social">Back Home</StyledLink>
  </Wrapper>
);

export default index;
