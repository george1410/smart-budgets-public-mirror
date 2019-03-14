import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  padding: 5rem 0 0 0;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const Input = styled.input`
  width: 50rem;
  height: 4rem;
  ${media.phone`
    width: 100%;
  `}
`;

class AddFriends extends React.Component {
  state = {

  }

  render() {
    return (
      <>
        <Header title="Friends" />
        <Wrapper>
          <p>Adding friends</p>
          <Input type="text" placeholder="Search for a friend" />
        </Wrapper>
      </>
    );
  }
}

export default AddFriends;
