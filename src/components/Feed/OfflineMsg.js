import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  right: calc((100vw - 50rem) / 2 + 52rem);
  max-width: 30rem;
  margin-left: 2rem;
  top: 5rem;
  position: absolute;
  min-height: 5rem;
  background-color: ${props => props.theme.primaryBlueShadow};
  color: ${props => props.theme.primaryBlue};
  font-size: ${props => props.theme.fontTiny};
  align-items: center;
  justify-content: center;
  user-select: none;
  text-align: center;
  ${media.desktop`
    max-width: 100%;
    right: calc((100vw - 72rem) / 2 + 52rem);
    margin-left: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    margin-left: auto;
    position: static;
    right: auto;
    display: flex;
    width: 50rem;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

const OfflineMsg = ({ message }) => (
  <Wrapper>
    {message}
  </Wrapper>
);

OfflineMsg.propTypes = {
  message: PropTypes.string.isRequired,
};

export default OfflineMsg;
