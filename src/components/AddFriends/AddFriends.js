import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
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

class AddFriends extends React.Component {
  state = {
    searchTerm: '',
    friends: [],
  }

  onSearchChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      searchTerm: text,
    }));
  }

  findFriends = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm === '') {
      return;
    }
    api.get('api/users', {
      params: {
        searchTerm,
      },
    })
      .then((payload) => {
        this.setState(() => ({
          friends: payload.data,
          error: '',
        }));
      })
      .catch(() => {
        this.setState(() => ({
          friends: [],
          error: 'Could not find any friends.',
        }));
      });
  }

  render() {
    const { searchTerm, friends, error } = this.state;
    return (
      <>
        <Header title="Friends" />
        <Wrapper>
          <Form onSubmit={this.findFriends}>
            <Input
              placeholder="Search for a friend"
              value={searchTerm}
              onChange={this.onSearchChange}
            />
            <Button type="submit">Search</Button>
          </Form>
          {
            friends && friends.map(user => (
              <PersonCard {...user} key={uuid()} />
            ))
          }
          {
            error && <p>{error}</p>
          }
        </Wrapper>
      </>
    );
  }
}

export default AddFriends;
