import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.offWhite};
  width: 50rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  ${media.phone`
    width: 100%;
  `}
`;

const Name = styled.span`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.grey};
  text-align: center;
  margin-right: 40px;
  flex: 1;
`;

const PersonCard = ({
  firstName, lastName,
}) => (
  <Wrapper>
    <Gravatar email={firstName} size={40} style={{ borderRadius: '50px' }} />
    <Name>
      {firstName}
      {' '}
      {lastName}
    </Name>
  </Wrapper>
);

PersonCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default PersonCard;
