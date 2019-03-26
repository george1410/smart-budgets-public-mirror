import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  border-bottom: none;
  background-color: ${props => props.theme.white};
  width: 50rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};

  &:first-of-type {
    border-radius: ${props => props.theme.topCorners};
  }

  &:last-of-type {
    border-radius: ${props => props.theme.bottomCorners};
    border-bottom: 1px solid ${props => props.theme.offWhite};
  }

  ${media.phone`
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};

  &:first-of-type {
    border-radius: 0;
  }

  &:last-of-type {
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.offWhite};
  }
`}
`;

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  margin-right: ${props => (props.shift === 'friend' ? '40px' : '0')};
  flex: 1;
  ${media.phone`
    font-size: ${props => props.theme.fontTiny};
  `}
`;

const Button = styled.button`
  background-color: ${props => (props.decline ? props.theme.error : props.theme.primaryBlue)};
  border: none;
  color: ${props => props.theme.white};
  width: ${props => (props.wide ? '12rem' : 'auto')};
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};

  &:last-of-type {
    margin-left: 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background-color: ${props => props.theme.grey};
    cursor: default;
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.tablet`
    &:hover {
      transform: scale(1);
    }

    &:active {
      transform: scale(0.95);
    }
  `}
`;

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
      <Gravatar email={firstName} size={40} style={{ borderRadius: '4px' }} />
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
