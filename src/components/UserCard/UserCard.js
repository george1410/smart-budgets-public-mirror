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
  sent,
  received,
  friend,
  searched,
  type,
  respond,
  addFriend,
  removeRequest,
}) => {
  const [sendBtnText, setsendBtnText] = useState('Send Request');
  const [cancelBtnText, setcancelBtnText] = useState('Cancel Request');
  const [acceptBtnText, setAcceptBtnText] = useState('Accept');
  const [declineBtnText, setDeclineBtnText] = useState('Decline');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const acceptRequest = () => {
    respond(userId, true);
    setAcceptBtnText('Accepted');
    setBtnDisabled(true);
  };
  const declineRequest = () => {
    respond(userId, false);
    setDeclineBtnText('Declined');
    setBtnDisabled(true);
  };
  const sendRequest = () => {
    addFriend(userId);
    setsendBtnText('Request Sent');
    setBtnDisabled(true);
  };
  const cancelSent = () => {
    removeRequest(userId);
    setcancelBtnText('Cancelled');
    setBtnDisabled(true);
  };
  return (
    <Wrapper friend={friend} onClick={friend ? toggleModal : undefined}>
      <ProfilePic email={firstName} size={40} />
      <Name shift={type}>
        {firstName}
        {' '}
        {lastName}
      </Name>
      {
      received
      && (
        <>
          <Button
            type="button"
            onClick={acceptRequest}
            disabled={btnDisabled}
          >
            {acceptBtnText}
          </Button>
          <Button
            decline
            type="button"
            onClick={declineRequest}
            disabled={btnDisabled}
          >
            {declineBtnText}
          </Button>
        </>
      )
      }
      {
        sent
        && (
        <Button
          type="button"
          onClick={cancelSent}
          decline
          wide
          disabled={btnDisabled}
        >
          {cancelBtnText}
        </Button>
        )
      }
      {
        !sent && !received && searched
        && (
        <Button
          type="button"
          onClick={sendRequest}
          disabled={btnDisabled}
          wide
        >
          {sendBtnText}
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
  searched: false,
  friend: false,
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
  searched: PropTypes.bool,
  sent: PropTypes.bool.isRequired,
  received: PropTypes.bool.isRequired,
  friend: PropTypes.bool,
};

export default UserCard;
