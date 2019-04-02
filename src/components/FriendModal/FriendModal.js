import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal, { BaseModalBackground } from 'styled-react-modal';
import styled from 'styled-components';
import media from '../../util/mediaQueries';
import ProfilePic from '../UserCard/ProfilePic';
import CloseModalButton from './CloseModalButton';
import Button from '../UserCard/Button';
import { removeFriend } from '../../actions/friends';

const StyledModal = Modal.styled`
  position: relative;
  width: 40rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  transition: opacity ease 500ms;
  opacity: ${props => props.opacity};
  border-radius: ${props => props.theme.borderRadius};
  ${media.phone`
    width: 90vw;
    height: 60vh;
  `}
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity ease 200ms;
`;

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
`;

const Points = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
`;

const FriendModal = ({
  isOpen,
  toggleModal,
  friend: {
    firstName,
    lastName,
    points,
  },
  removeFriend,
}) => {
  const [opacity, setOpacity] = useState(0);
  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    });
  };
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        afterOpen={afterOpen}
        opacity={opacity}
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
        {
          removeFriend
          && (
            <Button
              type="button"
              onClick={removeFriend}
              decline
              wide
            >
              Remove Friend
            </Button>
          )
        }
      </StyledModal>
    </div>
  );
};

FriendModal.defaultProps = {
  removeFriend: undefined,
};

FriendModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    points: PropTypes.number,
  }).isRequired,
  removeFriend: PropTypes.func,
};

export default FriendModal;
