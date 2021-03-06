import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FriendModal from '../../FriendModal/FriendModal';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.4rem;
  min-height: 4rem;
  background-color: ${props => (props.highlight ? props.theme.primaryBlue : props.theme.white)};
  color: ${props => (props.highlight ? props.theme.white : props.theme.black)};
  font-weight: 500;
  box-shadow: ${props => (props.user && '0 -5px 2px rgba(0, 0, 0, 0.1)')};
  border-radius: ${props => (props.user && props.theme.bottomCorners)};
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.offWhite};
    color: ${props => (props.highlight ? props.theme.primaryBlue : props.theme.black)};
  }

  ${media.tablet`
    &:hover {
      background-color: ${props => (props.highlight ? props.theme.primaryBlue : props.theme.white)};
      color: ${props => (props.highlight ? props.theme.white : props.theme.black)};
    }
  `}
`;

const Index = styled.span`
  width: 10rem;
  text-align: start;
`;

const Name = styled.div`
  width: 100%;
  text-align: center;
`;

const Points = styled.span`
  width: 10rem;
  text-align: end;
`;

const BoardRow = ({
  index,
  person: {
    firstName,
    lastName,
    highlight,
  },
  tab,
  person,
  user,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <Wrapper user={user} highlight={highlight} onClick={toggleModal}>
        <Index>{index}</Index>
        <Name>
          {firstName}
          {' '}
          {lastName}
        </Name>
        <Points>
          {
            person[tab]
          }
        </Points>
      </Wrapper>
      <FriendModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        friend={person}
      />
    </>
  );
};

BoardRow.defaultProps = {
  user: false,
  index: 1,
  tab: 'points',
};

BoardRow.propTypes = {
  user: PropTypes.bool,
  index: PropTypes.number,
  person: PropTypes.shape({
    points: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
  }).isRequired,
  tab: PropTypes.string,
};

export default BoardRow;
