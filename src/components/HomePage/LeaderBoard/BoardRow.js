import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

const Index = styled.span`
  width: 10rem;
  text-align: start;
`;

const Points = styled.span`
  width: 10rem;
  text-align: end;
`;

const BoardRow = ({
  index, firstName, lastName, points, user, highlight,
}) => (
  <Wrapper user={user} highlight={highlight}>
    <Index>{index}</Index>
    <span>
      {firstName}
      {' '}
      {lastName}
    </span>
    <Points>{points}</Points>
  </Wrapper>
);

BoardRow.defaultProps = {
  user: false,
  index: 1,
  points: 0,
  highlight: false,
};

BoardRow.propTypes = {
  user: PropTypes.bool,
  index: PropTypes.number,
  points: PropTypes.number,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

export default BoardRow;
