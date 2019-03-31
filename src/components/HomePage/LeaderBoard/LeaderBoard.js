import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import media from '../../../util/mediaQueries';
import { startSetFriends } from '../../../actions/friends';
import BoardRow from './BoardRow';

const Board = styled.div`
  width: 100%;
  max-width: 50rem;
  min-height: 20rem;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
`;

const BoardTitle = styled.div`
  background-color: ${props => props.theme.offWhite};
  font-size: ${props => props.theme.fontSmall};
  text-align: center;
  padding: 1rem;
  font-weight: 500;
`;

const leaderBoard = ({ setFriends, friends }) => {
  const [] = useState();
  useEffect(() => {
    setFriends();
  }, []);
  return (
    <Board>
      <BoardTitle>Current Rankings</BoardTitle>
      {
        friends && friends.map((friend, index) => (
          <BoardRow index={index + 1} key={friend.userId} {...friend} />
        ))
      }
    </Board>
  );
};

leaderBoard.defaultProps = {};

leaderBoard.propTypes = {};

const mapStateToProps = state => ({
  friends: state.friends.friends,
});

const mapDispatchToProps = dispatch => ({
  setFriends: () => dispatch(startSetFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(leaderBoard);
