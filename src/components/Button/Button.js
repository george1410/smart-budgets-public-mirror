import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import AltStyledButton from './AltStyledButton';
import LogoutButton from './LogoutButton';

const ActionButton = ({
  title, type, altbtn, logout, ...rest
}) => {
  if (altbtn) {
    return (
      <AltStyledButton type={type} {...rest}>
        {title}
      </AltStyledButton>
    );
  } if (logout) {
    return (
      <LogoutButton type={type} {...rest}>
        {title}
      </LogoutButton>
    );
  }
  return (
    <StyledButton type={type} {...rest}>
      {title}
    </StyledButton>
  );
};

ActionButton.defaultProps = {
  title: 'Button',
  type: 'button',
  altbtn: false,
  logout: false,
};

ActionButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  altbtn: PropTypes.bool,
  logout: PropTypes.bool,
};

export default ActionButton;
