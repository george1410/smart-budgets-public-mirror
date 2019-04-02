import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { startSetFriends } from '../../../actions/friends';
import BoardRow from './BoardRow';
import order from '../../../selectors/points';

const Board = styled.div`
  width: 100%;
  max-width: 50rem;
  min-height: 31rem;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
`;

const BoardTitle = styled.div`
  background-color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSmall};
  border-radius: ${props => props.theme.topCorners};
  text-align: center;
  padding: 1rem;
  font-weight: 500;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  z-index: 5;
`;

const Middle = styled.div`
  overflow: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const leaderBoard = ({ setFriends, ranking: { friends, user } }) => {
  useEffect(() => {
    setFriends();
  }, []);
  return (
    <Board>
      <BoardTitle>Current Rankings</BoardTitle>
      <Middle>
        {
          friends && friends.map(friend => (
            <BoardRow index={friend.index} key={uuid()} person={friend} />
          ))
        }
      </Middle>
      {
        user && (<BoardRow user index={user.index} person={user} />)
      }
    </Board>
  );
};

leaderBoard.propTypes = {
  setFriends: PropTypes.func.isRequired,
  ranking: PropTypes.shape({
    friends: PropTypes.instanceOf(Array),
    user: PropTypes.instanceOf(Object),
  }).isRequired,
};

const mapStateToProps = state => ({
  ranking: order(state.friends.friends, state.user),
});

const mapDispatchToProps = dispatch => ({
  setFriends: () => dispatch(startSetFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(leaderBoard);
