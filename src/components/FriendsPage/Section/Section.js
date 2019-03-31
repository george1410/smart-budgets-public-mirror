import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../UserCard/UserCard';
import Wrapper from './Wrapper';
import SectionHeader from './SectionHeader';

const Section = ({
  title, users, type, respond, removeRequest,
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
                type={type}
                respond={respond}
                removeRequest={removeRequest}
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
  type: undefined,
  respond: undefined,
  removeRequest: undefined,
};

Section.propTypes = {
  users: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  type: PropTypes.string,
  respond: PropTypes.func,
  removeRequest: PropTypes.func,
};

export default Section;
