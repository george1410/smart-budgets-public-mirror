import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.error};
  background-color: ${props => props.theme.white};
  box-shadow: 0 4px 0 ${props => props.theme.errorDark};
  border: 3px solid ${props => props.theme.error};
  user-select: none;

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
