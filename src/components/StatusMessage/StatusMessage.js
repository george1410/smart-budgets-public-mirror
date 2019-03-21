import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.span`
  color: ${props => (props.dark ? props.theme.primaryBlue : props.theme.white)};
  font-size: ${props => props.theme.fontSmall};
  margin-top: 5rem;
  text-align: center;
`;

const StatusMessage = ({ message, dark }) => (
  <Message dark={dark}>
    {message}
  </Message>
);

StatusMessage.defaultProps = {
  message: 'Set your message here.',
  dark: false,
};

StatusMessage.propTypes = {
  message: PropTypes.string,
  dark: PropTypes.bool,
};

export default StatusMessage;
