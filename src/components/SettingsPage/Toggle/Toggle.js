import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';
import Title from './Title';
import Wrapper from './Wrapper';

const Toggle = ({ value, toggle }) => (
  <Wrapper
    bg={value}
    onClick={toggle}
    onKeyPress={toggle}
    tabIndex={0}
  >
    <Dot align={value} />
    <Title>{value}</Title>
  </Wrapper>
);

Toggle.propTypes = {
  value: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggle;
