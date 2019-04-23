import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';

const Icon = styled.svg`
  align-self: center;
  height: 4rem;
  width: 4rem;
  transition: all 0.2s ease-in-out;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;

  & > g {
    fill: ${props => props.theme.grey};
  }

  &:hover {
    transform: scale(1.2);

    & > g {
      fill: ${props => props.theme.primaryBlue};
    }
  }

  ${media.tablet`
    &:hover {
      transform: scale(1);

      & > g {
        fill: ${props => props.theme.grey};
      }
    }
  `}
`;

const CloseModalButton = ({ close }) => (
  <Icon onClick={close} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>Close</title>
    <g fill="#111111" stroke="none">
      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
    </g>
  </Icon>
);

CloseModalButton.propTypes = {
  close: PropTypes.func.isRequired,
};

export default CloseModalButton;
