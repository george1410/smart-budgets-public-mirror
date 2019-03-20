import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.offWhite};
  width: 50rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  ${media.phone`
    width: 100%;
  `}
`;

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
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

const PersonCard = ({
  userId, firstName, lastName, addFriend, email,
}) => (
  <Wrapper>
    <Gravatar email={email} size={40} style={{ borderRadius: '50px' }} />
    <Name>
      {firstName}
      {' '}
      {lastName}
    </Name>
    <AddButton type="button" onClick={() => addFriend(userId)}>Add Friend</AddButton>
  </Wrapper>
);

PersonCard.propTypes = {
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  addFriend: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default PersonCard;
