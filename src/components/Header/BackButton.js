import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';

const Button = styled.button`
  border: none;
  background-color: none;
  padding: 0;

  & > svg {
    width: 3.5rem;
    height: 3.5rem;

    & > g {
      fill: ${props => props.theme.primaryBlue};
    }
  }

  ${media.tablet`
    &:active {
      transform: scale(0.8);
    }
  `}
`;

const BackButton = ({ action }) => (
  <Button onClick={action}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Back</title>
      <g>
        <path d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2z" />
      </g>
    </svg>
  </Button>
);

BackButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default BackButton;
