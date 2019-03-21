import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserCard from '../../UserCard/UserCard';
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
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  margin: 1rem 0;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.cardShadow};
  ${media.phone`
    margin: 0;
    border-radius: 0;
    width: 100%;
    background-color: ${props => props.theme.primaryBlue};
    color: ${props => props.theme.white};
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
              <UserCard
                key={user.userId}
                {...user}
                // type="friend"
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
};

Section.propTypes = {
  users: PropTypes.instanceOf(Array),
  title: PropTypes.string,
};

export default Section;
