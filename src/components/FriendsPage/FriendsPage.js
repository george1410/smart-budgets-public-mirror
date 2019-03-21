import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Section from './Section/Section';
import StatusMessage from '../StatusMessage/StatusMessage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  min-height: 100vh;
  background-color: ${props => props.theme.primaryBlue};
  ${media.tablet`
    padding-bottom: ${props => (props.isX ? '10rem' : '5rem')};
  `}
`;

const FriendsPage = ({ friends, sent, received }) => (
  <>
    <Header title="Friends List" back />
    <Wrapper>
      {
      (friends || sent || received)
        ? (
          <>
            <Section title="Received" users={received} />
            <Section title="Sent" users={sent} />
            <Section title="Friends" users={friends} />
          </>
        )
        : (
          <StatusMessage message="Try sending some friend requests first." />
        )
        }
    </Wrapper>
  </>
);

FriendsPage.defaultProps = {
  friends: undefined,
  sent: undefined,
  received: undefined,

};

FriendsPage.propTypes = {
  friends: PropTypes.instanceOf(Array),
  received: PropTypes.instanceOf(Array),
  sent: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  friends: state.friends.friends,
  received: state.friends.received,
  sent: state.friends.sent,
});

export default connect(mapStateToProps)(FriendsPage);
