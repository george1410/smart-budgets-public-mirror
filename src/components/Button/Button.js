import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import AltStyledButton from './AltStyledButton';
import SmallButton from './SmallButton';
import LogoutButton from './LogoutButton';

const ActionButton = ({
  title, type, altbtn, logout, smallbtn, ...rest
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
  } if (smallbtn) {
    return (
      <SmallButton type={type} {...rest}>
        {title}
      </SmallButton>
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
  smallbtn: false,
};

ActionButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  altbtn: PropTypes.bool,
  logout: PropTypes.bool,
  smallbtn: PropTypes.bool,
};

export default ActionButton;
