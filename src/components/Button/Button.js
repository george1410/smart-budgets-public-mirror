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
  background-color: ${props => props.theme.primaryBlue};
  border: none;
  box-shadow: 0 4px 0 ${props => props.theme.primaryBlueDark};
  user-select: none;

  /* to make button the same height as input fields */
  border-bottom: 3px solid ${props => props.theme.primaryBlue};
  border-top: 3px solid ${props => props.theme.primaryBlue};

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

const ActionButton = ({ title, type, ...rest }) => (
  <Button type={type} {...rest}>
    {title}
  </Button>
);

ActionButton.defaultProps = {
  title: 'Button',
  type: 'button',
};

ActionButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default ActionButton;
