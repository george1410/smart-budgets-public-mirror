import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import media from '../../util/mediaQueries';
import ProfilePic from '../UserCard/ProfilePic';
import CloseModalButton from './CloseModalButton';
import Button from '../UserCard/Button';

const StyledModal = Modal.styled`
  position: relative;
  width: 40rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  transition: ${props => props.theme.transition};
  opacity: ${props => props.opacity};
  border-radius: ${props => props.theme.borderRadius};
  ${media.phone`
    width: 90vw;
    height: 60vh;
  `}
`;

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
`;

const Points = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
`;

const FriendProfile = ({
  isOpen,
  toggleModal,
  friend: {
    firstName,
    lastName,
    points,
  },
  removeFriend,
}) => 
  // const after
   (
  <div>
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <CloseModalButton close={toggleModal} />
      <ProfilePic email={firstName} size={100} side={100} />
      <Name>
        <div>
          {firstName}
        </div>
        <div>
          {lastName}
        </div>
      </Name>
      <Points>
        Points:
        {
          ' '
        }
        {points}
      </Points>
      <Button
        type="button"
        onClick={removeFriend}
        decline
      >
        Remove Friend
      </Button>
    </StyledModal>
  </div>
)
      ;

FriendProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
  removeFriend: PropTypes.func.isRequired,
};

export default FriendProfile;
