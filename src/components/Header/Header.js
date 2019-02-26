import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.header`
  height: 5rem;
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.white};
  box-shadow: 0 1px 0 ${props => props.theme.shadowCol};
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2;
  ${media.tablet`
    display: flex;
    top: 0;
  `}
`;

const Title = styled.span`
  color: ${props => props.theme.primaryBlue};
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
