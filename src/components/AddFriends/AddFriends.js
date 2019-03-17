import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import PersonCard from './PersonCard';
import api from '../../api/api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const Form = styled.form`
  display: flex;
  width: 50rem;
  ${media.phone`
    width: 100%;
  `}
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: ${props => props.theme.fontSmall};
  ${media.phone`
    width: 100%;
  `}
`;

const Button = styled.button`
  width: 10rem;
  border: none;
  font-size: ${props => props.theme.fontSmall};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};

  :active {
    transform: translateY(2px);
  }
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
    console.log(friendId);
  };

  return (
    <>
      <Header title="Friends" />
      <Wrapper>
        <Form onSubmit={findFriends}>
          <Input
            placeholder="Search for a friend"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <Button type="submit">Search</Button>
        </Form>
        {
          friends && friends.map(user => (
            <PersonCard {...user} key={uuid()} addFriend={addFriend} />
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
