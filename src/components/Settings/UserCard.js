import React from 'react';
import styled from 'styled-components';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  width: 40rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  box-shadow: 0 1px 1px ${props => props.theme.shadowCol};
  margin-bottom: 1rem;
  ${media.phone`
    width: 100%;
  `}
`;

const Picture = styled(Gravatar)`
  border-radius: 100px;
`;

const Name = styled.span`
  color: ${props => props.theme.black};
  flex: 2;
  text-align: center;
  font-size: ${props => props.theme.fontSmall};
  margin-right: 50px;
`;

const UserCard = ({ user: { firstName, lastName } }) => (
  <Wrapper>
    <Picture email="firstName" size={50} />
    <Name>{`${firstName} ${lastName}`}</Name>
  </Wrapper>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default UserCard;
