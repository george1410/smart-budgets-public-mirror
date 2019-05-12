import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../UserCard/UserCard';
import Wrapper from './Wrapper';
import SectionHeader from './SectionHeader';

const Section = ({
  title,
  users,
  removeRequest,
  respond,
  received,
  sent,
  friend,
}) => (
  <Wrapper>
    {
      users && (users.length !== 0) && (
        <>
          <SectionHeader>{title}</SectionHeader>
          {
            users.map(user => (
              <UserCard
                key={user.userId}
                user={user}
                respond={respond}
                removeRequest={removeRequest}
                received={received}
                sent={sent}
                friend={friend}
              />
            ))}
        </>
      )
    }
  </Wrapper>
);

Section.defaultProps = {
  title: 'Section Title',
  users: undefined,
  respond: undefined,
  removeRequest: undefined,
  received: false,
  sent: false,
  friend: false,
};

Section.propTypes = {
  users: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  received: PropTypes.bool,
  sent: PropTypes.bool,
  respond: PropTypes.func,
  removeRequest: PropTypes.func,
  friend: PropTypes.bool,
};

export default Section;
