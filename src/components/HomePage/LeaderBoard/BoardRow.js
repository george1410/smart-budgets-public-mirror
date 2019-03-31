import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.4rem;
`;

const Index = styled.span`
  width: 2rem;
`;
const Name = styled.span``;
const Points = styled.span``;

const BoardRow = ({
  index, firstName, lastName, points,
}) => (
  <Wrapper>
    <Index>{index}</Index>
    <Name>
      {firstName}
      {' '}
      {lastName}
    </Name>
    <Points>{points}</Points>
  </Wrapper>
);

BoardRow.defaultProps = {};

BoardRow.propTypes = {};

export default BoardRow;
