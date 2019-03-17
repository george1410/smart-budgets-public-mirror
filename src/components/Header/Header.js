import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Title from './Title';

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
