import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Section from './Section/Section';
import StatusMessage from '../StatusMessage/StatusMessage';
import {
  respondToRequest, startSetFriends, startSetReceived, startSetSent, removeFriend,
} from '../../actions/friends';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  min-height: 100vh;
  background-color: ${props => props.theme.white};
  ${media.tablet`
    padding-bottom: ${props => (props.isX ? '10rem' : '5rem')};
  `}
`;

const FriendsPage = ({
  friends,
  sent,
  received,
  respond,
  setFriends,
  setReceived,
  setSent,
  remove,
}) => {
  useEffect(() => {
    setFriends();
    setReceived();
    setSent();
  }, []);
  return (
    <>
      <Header title="Friends List" back />
      <Wrapper>
        {
      (friends || sent || received)
        ? (
          <>
            <Section title="Received" users={received} type="received" respond={respond} />
            <Section title="Sent" users={sent} removeRequest={remove} type="sent" />
            <Section title="Friends" users={friends} type="friends" removeRequest={remove} />
          </>
        )
        : (
          <StatusMessage message="Try sending some friend requests first." />
        )
        }
      </Wrapper>
    </>
  );
};

FriendsPage.defaultProps = {
  friends: undefined,
  sent: undefined,
  received: undefined,
};

FriendsPage.propTypes = {
  friends: PropTypes.instanceOf(Array),
  received: PropTypes.instanceOf(Array),
  sent: PropTypes.instanceOf(Array),
  respond: PropTypes.func.isRequired,
  setFriends: PropTypes.func.isRequired,
  setReceived: PropTypes.func.isRequired,
  setSent: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  friends: state.friends.friends,
  received: state.friends.received,
  sent: state.friends.sent,
});

const mapDispatchToProps = dispatch => ({
  respond: (id, accepted) => dispatch(respondToRequest(id, accepted)),
  setFriends: () => dispatch(startSetFriends()),
  setSent: () => dispatch(startSetSent()),
  setReceived: () => dispatch(startSetReceived()),
  remove: friendId => dispatch(removeFriend(friendId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage);
