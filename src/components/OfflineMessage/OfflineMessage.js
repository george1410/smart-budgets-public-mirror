import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Offline } from 'react-detect-offline';
import media from '../../util/mediaQueries';

const OfflineWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  position: fixed;
  z-index: 5;
  ${media.desktop`
    justify-content: flex-start;
  `}
  ${media.tablet`
    width: 100vw;
    justify-content: center;
  `}
`;

const Message = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20vw;
  background-color: ${props => props.theme.primaryBlueShadow};
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontTiny};
  user-select: none;
  text-align: center;
  ${media.tablet`
    min-width: 100vw;
  `}
`;

const OfflineMessage = ({ message }) => (
  <OfflineWrapper>
    <Offline>
      <Message>
        {message}
      </Message>
    </Offline>
  </OfflineWrapper>
);

OfflineMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default OfflineMessage;
