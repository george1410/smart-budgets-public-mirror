import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import ProfilePic from './ProfilePic';
import Name from './Name';
import Button from './Button';

const UserCard = ({
  userId, firstName, lastName, type, respond, addFriend, removeRequest,
}) => {
  const [btnText, setBtnText] = useState('Send Request');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const acceptRequest = () => {
    respond(userId, true);
  };
  const declineRequest = () => {
    respond(userId, false);
  };
  const sendRequest = () => {
    addFriend(userId);
    setBtnText('Request Sent');
    setBtnDisabled(true);
  };
  const cancelSent = () => {
    removeRequest(userId);
  };
  return (
    <Wrapper>
      <ProfilePic email={firstName} size={40} />
      <Name shift={type}>
        {firstName}
        {' '}
        {lastName}
      </Name>
      {
      type === 'received'
      && (
        <>
          <Button
            type="button"
            onClick={acceptRequest}
          >
            Accept
          </Button>
          <Button
            decline
            type="button"
            onClick={declineRequest}
          >
            Decline
          </Button>
        </>
      )
      }
      {
        type === 'sent'
        && (
        <Button
          type="button"
          onClick={cancelSent}
          decline
        >
        Cancel request
        </Button>
        )
      }
      {
        type === 'add'
        && (
        <Button
          type="button"
          onClick={sendRequest}
          disabled={btnDisabled}
          wide
        >
          {btnText}
        </Button>
        )
      }
      {
        type === 'friends'
        && (
          <Button
            type="button"
            onClick={cancelSent}
            decline
          >
          Remove Friend
          </Button>
        )
      }
    </Wrapper>
  );
};

UserCard.defaultProps = {
  type: 'friend',
  respond: undefined,
  addFriend: undefined,
  removeRequest: undefined,
};

UserCard.propTypes = {
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  respond: PropTypes.func,
  type: PropTypes.string,
  addFriend: PropTypes.func,
  removeRequest: PropTypes.func,
};

export default UserCard;
