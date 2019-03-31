import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import ProfilePic from './ProfilePic';
import Name from './Name';
import Button from './Button';
import FriendModal from '../FriendModal/FriendModal';

const UserCard = ({
  user,
  user: {
    userId,
    firstName,
    lastName,
  },
  type,
  respond,
  addFriend,
  removeRequest,
}) => {
  const [btnText, setBtnText] = useState('Send Request');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
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
    <Wrapper type={type} onClick={type === 'friends' ? toggleModal : undefined}>
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
      <FriendModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        friend={user}
        removeFriend={cancelSent}
      />
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
  user: PropTypes.shape({
    userId: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  respond: PropTypes.func,
  type: PropTypes.string,
  addFriend: PropTypes.func,
  removeRequest: PropTypes.func,
};

export default UserCard;
