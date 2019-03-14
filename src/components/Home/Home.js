import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  padding: 5rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const StyledLink = styled(Link)`
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSmall};
  height: 3rem;
  width: 20rem;
  text-decoration: none;

  &:active {
    transform: translateY(4px);
  }
`;

const Home = () => (
  <>
    <Header title="Home" />
    <Wrapper>
      <p>This will be the social / home page</p>
      <StyledLink to="/friends">Add Friends</StyledLink>
    </Wrapper>
  </>
);

export default Home;
