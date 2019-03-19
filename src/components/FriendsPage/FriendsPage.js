import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Section from './Section/Section';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 0 0;
  ${media.tablet`
    padding-bottom: ${props => props.theme.bottomPad};
  `}
`;

const FriendsPage = ({ friends, sent, received }) => (
  <>
    <Header title="Friends List" />
    <Wrapper>
      <Section title="Received" users={received} />
      <Section title="Sent" users={sent} />
      <Section title="Friends" users={friends} />
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
