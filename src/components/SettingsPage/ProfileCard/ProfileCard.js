import React from 'react';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import Name from './Name';
import Wrapper from './Wrapper';

const UserCard = ({ user: { firstName, lastName, email } }) => (
  <Wrapper>
    <Gravatar
      style={{ borderRadius: '100px' }}
      email={email}
      size={50}
    />
    <Name>{`${firstName} ${lastName}`}</Name>
  </Wrapper>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default UserCard;
