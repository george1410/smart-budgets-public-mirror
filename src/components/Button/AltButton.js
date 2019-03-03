import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.error};
  border: none;
  outline: none;
  box-shadow: 0 4px 0 #800022;
  margin-top: 2rem;

  /* to make button the same height as input fields */
  border-bottom: 3px solid ${props => props.theme.error};
  border-top: 3px solid ${props => props.theme.error};

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

const AltButton = ({ title, type, ...rest }) => (
  <Button type={type} {...rest}>
    {title}
  </Button>
);

AltButton.defaultProps = {
  title: 'Button',
  type: 'button',
};

AltButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default AltButton;
