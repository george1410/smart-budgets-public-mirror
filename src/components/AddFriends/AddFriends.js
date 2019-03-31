import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import UserCard from '../UserCard/UserCard';
import api from '../../api/api';
import StatusMessage from '../StatusMessage/StatusMessage';
import {
  respondToRequest, removeFriend,
} from '../../actions/friends';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  min-height: 100vh;
  background-color: ${props => props.theme.white};
  ${media.tablet`
    padding-bottom: ${props => props.theme.bottomPad};
  `}
`;

const Form = styled.form`
  display: flex;
  width: 50rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  box-shadow: ${props => props.theme.cardShadow};
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    transform: scale(1.01);
    box-shadow: ${props => props.theme.hoverShadow};
  }

  ${media.tablet`
    &:hover {
      transform: scale(1);
      box-shadow: ${props => props.theme.cardShadow};
    }
  `}

  ${media.phone`
    width: 100%;
    box-shadow: none;

    &:hover {
      transform: scale(1);
      box-shadow: none;
    }
  `}
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: ${props => props.theme.fontSmall};
  line-height: normal;
  padding: 0 2rem;
  border: none;
  border: 1px solid ${props => props.theme.grey};
  border-radius: ${props => props.theme.leftCorners};
  ${media.phone`
    width: 100%;
    border-radius: 0;
  `}
`;

const Button = styled.button`
  min-width: 10rem;
  font-size: ${props => props.theme.fontSmall};
  background-color: ${props => props.theme.primaryBlue};
  border: 1px solid ${props => props.theme.grey};
  border-radius: ${props => props.theme.rightCorners};
  color: ${props => props.theme.white};
  cursor: pointer;
  font-weight: 500;

  &:disabled {
    background-color: ${props => props.theme.grey};
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.phone`
    border-radius: 0;
  `}
`;

const AddFriends = ({ id, respond, remove }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(undefined);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onSearchChange = (e) => {
    const text = e.target.value;
    if (text.length !== 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    setSearchTerm(text);
  };

  const findFriends = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      return;
    }
    api.get('api/users', {
      params: {
        id,
        searchTerm,
      },
    })
      .then((payload) => {
        setFriends(payload.data);
        setError(undefined);
      })
      .catch(() => {
        setFriends([]);
        setError('Could not find anyone by that name.');
      });
  };

  const addFriend = (friendId) => {
    api.post(`/api/users/${id}/friends`, { friendId });
  };

  return (
    <>
      <Header title="Find Friends" back />
      <Wrapper>
        <Form onSubmit={findFriends}>
          <Input
            placeholder="Look for a friend"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <Button type="submit" disabled={btnDisabled}>Find</Button>
        </Form>
        {
          friends && friends.map(user => (
            <UserCard
              key={uuid()}
              addFriend={addFriend}
              removeRequest={remove}
              respond={respond}
              user={user}
              sent={user.sentRequest}
              received={user.receivedRequest}
              searched
            />
          ))
        }
        {
          error && <StatusMessage message={error} />
        }
      </Wrapper>
    </>
  );
};

AddFriends.propTypes = {
  id: PropTypes.string.isRequired,
  respond: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  id: state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  respond: (id, accepted) => dispatch(respondToRequest(id, accepted)),
  remove: friendId => dispatch(removeFriend(friendId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends);
