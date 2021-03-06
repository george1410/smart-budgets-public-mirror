import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { startSetFriends, setLeaderboardTab } from '../../../actions/friends';
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
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSmall};
  border-radius: ${props => props.theme.topCorners};
  text-align: center;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  z-index: 5;
  height: 5rem;
  font-weight: 500;
  overflow: hidden;
`;

const Tab = styled.div`
  padding: 1rem;
  width: 50%;
  color: ${props => (props.highlight ? props.theme.black : props.theme.greyLight)};
  background-color: ${props => (props.highlight ? props.theme.white : props.theme.offWhite)};
  transition: ${props => props.theme.transition};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
  }
`;

const Middle = styled.div`
  overflow: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const leaderBoard = ({
  setTab, setFriends, tab, ranking: { friends, user },
}) => {
  const setTabPoints = () => {
    setTab('points');
  };
  const setTabHighScore = () => {
    setTab('highScore');
  };
  useEffect(() => {
    setFriends();
  }, []);
  return (
    <Board>
      <BoardTitle>
        <Tab onClick={setTabPoints} highlight={tab === 'points'}>
          Current Period
        </Tab>
        <Tab onClick={setTabHighScore} highlight={tab === 'highScore'}>
          Overall
        </Tab>
      </BoardTitle>
      <Middle>
        {
          friends && friends.map(friend => (
            <BoardRow tab={tab} index={friend.index} key={uuid()} person={friend} />
          ))
        }
      </Middle>
      {
        user && (<BoardRow tab={tab} user index={user.index} person={user} />)
      }
    </Board>
  );
};

leaderBoard.propTypes = {
  setFriends: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired,
  ranking: PropTypes.shape({
    friends: PropTypes.instanceOf(Array),
    user: PropTypes.instanceOf(Object),
  }).isRequired,
  tab: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  tab: state.friends.tab,
  ranking: order(state.friends.friends, state.user, state.friends.tab),
});

const mapDispatchToProps = dispatch => ({
  setFriends: () => dispatch(startSetFriends()),
  setTab: tab => dispatch(setLeaderboardTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(leaderBoard);
