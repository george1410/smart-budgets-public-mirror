import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendCard from '../FriendCard';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`
    width: 100%;
  `}
`;

const SectionHeader = styled.span`
  width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: ${props => props.theme.white};
  box-shadow: 0 1px 0 ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  ${media.tablet`
    width: 100%;
  `}
`;

const Section = ({ title, users }) => (
  <Wrapper>
    {
      !!users && (
        <>
          <SectionHeader>{title}</SectionHeader>
          {
            users.map(user => (
              <FriendCard key={user.userId} {...user} />
            ))}
        </>
      )
    }
  </Wrapper>
);

Section.defaultProps = {
  title: 'Section Title',
  users: undefined,
};

Section.propTypes = {
  users: PropTypes.instanceOf(Array),
  title: PropTypes.string,
};

export default Section;
