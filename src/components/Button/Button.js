import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import AltStyledButton from './AltStyledButton';

const ActionButton = ({
  title, type, altbtn, ...rest
}) => {
  if (altbtn) {
    return (
      <AltStyledButton type={type} {...rest}>
        {title}
      </AltStyledButton>
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
};

ActionButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  altbtn: PropTypes.bool,
};

export default ActionButton;
