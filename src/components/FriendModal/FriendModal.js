import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal, { BaseModalBackground } from 'styled-react-modal';
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
  padding: 2rem;
  background-color: white;
  transition: opacity ease 500ms;
  color: ${props => props.theme.grey};
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

const Points = styled.div`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  padding: 1rem 0;
  width: 20rem;
  display: flex;
  justify-content: space-between;

  :last-of-type {
    margin-bottom: 2rem;
  }
`;

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  margin: 2rem 0;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${props => props.theme.offWhite};

  & > span {
    :first-of-type {
      margin-right: 5px;
    }
  }
`;

const Streak = styled.div`
  font-size: ${props => props.theme.fontSmall};
  padding: 1rem 0;
  width: 20rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-radius: 4px;
  flex: 1;
`;

const FriendModal = ({
  isOpen,
  toggleModal,
  friend: {
    firstName,
    lastName,
    points,
    highScore,
    streak,
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
    <>
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
          <span>
            {firstName}
          </span>
          <span>
            {lastName}
          </span>
        </Name>
        <Streak>
          <span>
            Streak:
          </span>
          {' '}
          {streak}
          {
            streak === 0
              ? ('❄️')
              : ('🔥')
          }
        </Streak>
        <Points>
          <span>
            Current Score:
          </span>
          {' '}
          {points}
        </Points>
        <Points>
          <span>
            Overall Score:
          </span>
          {' '}
          {highScore}
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
    </>
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
    highScore: PropTypes.number,
    streak: PropTypes.number,
  }).isRequired,
  removeFriend: PropTypes.func,
};

export default FriendModal;
