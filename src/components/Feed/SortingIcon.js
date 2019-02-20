import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.svg`
  align-self: center;
  height: 1.8rem;
  width: 1.8rem;
  margin: 0 2px;
  opacity: 0;
  ${({ show }) => show && 'opacity: 100;'}
  ${({ show }) => (show === 'smallest') && 'transform: rotate(180deg); '}

  & > g > g > polyline {
    stroke: ${props => props.theme.primaryBlue};
  }
`;

const SortingIcon = ({ show }) => (
  <Icon show={show} viewBox="0 0 48 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(0.000000, -15.000000)" stroke="#979797" strokeWidth="4">
        <polyline id="Path-2" transform="translate(24.000000, 19.500000) rotate(-45.000000) translate(-24.000000, -19.500000) " points="9.83883476 1.80330086 6.30330086 37.1966991 41.6966991 33.6611652" />
      </g>
    </g>
  </Icon>
);

SortingIcon.defaultProps = {
  show: undefined,
};

SortingIcon.propTypes = {
  show: PropTypes.oneOf([undefined, 'greatest', 'smallest']),
};

export default SortingIcon;
