import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  ${media.tablet`
    padding-bottom: ${props => props.theme.bottomPad};
  `}
`;

const FriendsList = ({ friends }) => (
  <>
    <Header title="Friends List" />
    <Wrapper>

      {
       friends ? friends.map(friend => (
         <p key={friend.userId}>{friend.firstName}</p>
       ))
         : <p>No friends to show</p>
      }
    </Wrapper>
  </>
);

FriendsList.defaultProps = {
  friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  friends: state.friends.friends,
});

export default connect(mapStateToProps)(FriendsList);
