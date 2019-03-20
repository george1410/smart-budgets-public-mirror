import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../../util/mediaQueries';

const Wrapper = styled.button`
  background-color: ${props => props.theme.primaryBlue};
  border: none;
  padding: 0;
  cursor: pointer;
  outline-color: white;
  ${media.tablet`
    background-color: ${props => props.theme.white};
    margin-left: 1rem;
    outline-color: -webkit-focus-ring-color;
  `}
`;

const Icon = styled.svg`
  height: 3rem;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.8);
  }

  & > g {
    fill: ${props => props.theme.white};
    ${media.tablet`
      fill: ${props => props.theme.primaryBlue};
    `}
  }
`;

const ClearIcon = ({ clearInput }) => (
  <Wrapper onClick={clearInput}>
    <Icon viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <title>Clear</title>
      <g fill="#111111" stroke="none">
        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
      </g>
    </Icon>
  </Wrapper>
);

ClearIcon.propTypes = {
  clearInput: PropTypes.func.isRequired,
};

export default ClearIcon;
