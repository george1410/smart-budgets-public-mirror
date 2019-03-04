import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Online, Offline } from 'react-detect-offline';
import media from '../../util/mediaQueries';


const OfflineWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  ${media.desktop`
    justify-content: flex-start;
  `}
  ${media.tablet`
    justify-content: center;
  `}
`;

const Message = styled.div`
  padding-top: 5rem;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50rem;
  background-color: ${props => props.theme.primaryBlueShadow};
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontTiny};
  user-select: none;
  text-align: center;
  ${media.desktop`
    margin-left: ${props => (props.offCenter ? ('calc((100vw - 72rem) / 2 + 22rem)') : ('calc((100vw - 50rem) / 2)'))};
  `}
  ${media.tablet`
    margin-left: 0;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

// This offsets the InfoHeader for Feed when the OfflineMessage is not present.
const Padding = styled.div`
  min-height: 5rem;
`;

const OfflineMessage = ({ message, offCenter }) => (
  <OfflineWrapper>
    <Offline>
      <Message offCenter={offCenter}>
        {message}
      </Message>
    </Offline>
    <Online>
      <Padding />
    </Online>
  </OfflineWrapper>
);

OfflineMessage.defaultProps = {
  offCenter: false,
};

OfflineMessage.propTypes = {
  message: PropTypes.string.isRequired,
  offCenter: PropTypes.bool,
};

export default OfflineMessage;
