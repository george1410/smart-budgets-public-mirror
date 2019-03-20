import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.offWhite};
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
  }

  ${media.phone`
    width: 100%;
    box-shadow: ${props => props.theme.bottomShadow};

  &:first-of-type {
    border-radius: 0;
  }

  &:last-of-type {
    border-radius: 0;
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

const AddButton = styled.button`
  background-color: ${props => props.theme.offWhite};
  border: none;
  color: ${props => props.theme.black};
  font-size: 1.4rem;
  padding: 0.5rem 1rem;

  :active {
    transform: translateY(2px);
  }
`;

const UserCard = ({
  userId, firstName, lastName, addFriend, type,
}) => (
  <Wrapper>
    <Gravatar email={firstName} size={40} style={{ borderRadius: '4px' }} />
    <Name shift={type}>
      {firstName}
      {' '}
      {lastName}
    </Name>
    {
      type === 'add'
      && (
      <AddButton
        type="button"
        onClick={() => addFriend(userId)}
      >
        Add Friend
      </AddButton>
      )
    }
  </Wrapper>
);

UserCard.defaultProps = {
  addFriend: undefined,
  type: 'friend',
};

UserCard.propTypes = {
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  addFriend: PropTypes.func,
  // email: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default UserCard;
