import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';
import SortIcon from './SortingIcon';

const Wrapper = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSmall};
  justify-content: space-between;
  width: 50rem;
  padding: 1rem 2rem;
  box-shadow: 0 1px 0 ${props => props.theme.primaryBlue};
  ${media.phone`
    width: 100%;
  `}
`;

const Label = styled.div`
  color: ${props => props.theme.primaryBlue};
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const InfoHeader = ({ sortingByDate, sortingByAmount, sortBy }) => (
  <Wrapper>
    <Label onClick={sortingByDate}>
      Date
      <SortIcon
        rotation={0}
        show={sortBy === 'date'}
      />
    </Label>
    <Label onClick={sortingByAmount}>
      <SortIcon
        show={sortBy === 'amount'}
        rotation={0}
      />
      Amount
    </Label>
  </Wrapper>
);

InfoHeader.propTypes = {
  sortingByDate: PropTypes.func.isRequired,
  sortingByAmount: PropTypes.func.isRequired,
  // sortBy: PropTypes.string.isRequired,
};

export default InfoHeader;
