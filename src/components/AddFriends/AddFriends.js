import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import UserCard from '../UserCard/UserCard';
import api from '../../api/api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  min-height: 100vh;
  background-color: ${props => props.theme.primaryBlue};
  ${media.tablet`
    padding-bottom: ${props => (props.isX ? '10rem' : '5rem')};
  `}
`;

const Form = styled.form`
  display: flex;
  width: 50rem;
  margin: 1rem 0;
  ${media.phone`
    width: 100%;
  `}
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: ${props => props.theme.fontSmall};
  line-height: normal;
  padding: 0 2rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  border-radius: ${props => props.theme.leftCorners};
  box-shadow: ${props => props.theme.cardShadow};
  outline-color: ${props => props.theme.white};
  ${media.phone`
    box-shadow: ${props => props.theme.bottomShadow};
    width: 100%;
    border-radius: 0;
  `}
`;

const Button = styled.button`
  min-width: 10rem;
  font-size: ${props => props.theme.fontSmall};
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.primaryBlue};
  border-radius: ${props => props.theme.rightCorners};
  color: ${props => props.theme.primaryBlue};
  outline-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.cardShadow};

  :active {
    transform: translateY(2px);
  }

  ${media.phone`
    border-radius: 0;
    box-shadow: ${props => props.theme.bottomShadow};
  `}
`;

const AddFriends = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(undefined);

  const onSearchChange = (e) => {
    const text = e.target.value;
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
        setError('Could not find any friends.');
      });
  };

  const addFriend = (friendId) => {
    api.post(`/api/users/${id}/friends`, { friendId });
  };

  return (
    <>
      <Header title="Find Friends" />
      <Wrapper>
        <Form onSubmit={findFriends}>
          <Input
            placeholder="Look for a friend"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <Button type="submit">Find</Button>
        </Form>
        {
          friends && friends.map(user => (
            <UserCard {...user} key={uuid()} addFriend={addFriend} type="add" />
          ))
        }
        {
          error && <p>{error}</p>
        }
      </Wrapper>
    </>
  );
};

AddFriends.propTypes = {
  id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  id: state.auth.uid,
});

export default connect(mapStateToProps)(AddFriends);
