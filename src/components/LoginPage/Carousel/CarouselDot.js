import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../util/mediaQueries';

export const CarouselDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.highlight ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 20px;
  transition: ${props => props.theme.transition};
  ${media.tablet`
    background-color: ${props => (props.highlight ? props.theme.primaryBlue : 'rgba(0, 0, 0, 0.3)')};
  `}
`;

export const CarouselDotRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const Icon = styled.svg`
  align-self: center;
  height: 1.8rem;
  width: 1.8rem;
  margin: 0 2px;
  transition: all 0.2s ease-in-out;
  transform: rotate(${({ left }) => (left ? '90deg' : '270deg')});

  & > g > g > polyline {
    stroke: ${props => props.theme.white};
    ${media.tablet`
      stroke: rgba(0, 0, 0, 0.3);
    `}
  }
`;

export const Arrow = ({ left }) => (
  <Icon left={left} viewBox="0 0 48 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(0.000000, -15.000000)" strokeWidth="8">
        <polyline transform="translate(24.000000, 19.500000) rotate(-45.000000) translate(-24.000000, -19.500000) " points="9.83883476 1.80330086 6.30330086 37.1966991 41.6966991 33.6611652" />
      </g>
    </g>
  </Icon>
);

Arrow.defaultProps = {
  left: false,
};

Arrow.propTypes = {
  left: PropTypes.bool,
};
