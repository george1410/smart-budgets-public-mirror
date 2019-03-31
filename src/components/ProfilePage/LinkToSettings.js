import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../util/mediaQueries';

const ToSettings = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 5rem;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
  width: 40rem;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: 1.4rem;
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }

  ${media.tablet`
    &:hover {
      transform: scale(1);
      box-shadow: ${props => props.theme.cardShadow};
    }

    &:active {
      transform: scale(0.95);
      box-shadow: none;
    }
  `}
  ${media.phone`
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};
    border-radius: 0;
    ${media.tablet`
      &:hover {
        transform: scale(1);
        box-shadow: ${props => props.theme.bottomShadow};
      }

      &:active {
        transform: scale(0.95);
        box-shadow: none;
      }
    `}
  `}
`;

const LinkToSettings = () => (
  <ToSettings to="settings">
    Settings
  </ToSettings>
);

LinkToSettings.defaultProps = {};

LinkToSettings.propTypes = {};

export default LinkToSettings;
