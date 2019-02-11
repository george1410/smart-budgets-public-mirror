import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.header`
  height: 5rem;
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.primaryBlue};
  display: none;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    display: flex;
    top: 0;
  `}
`;

const Title = styled.h1`
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSmall};
`;

const Header = ({ title }) => (
  <Wrapper>
    <Title>
      {title}
    </Title>
  </Wrapper>
);

Header.defaultProps = {
  title: 'Title',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
