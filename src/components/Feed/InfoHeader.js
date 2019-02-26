import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';
import SortingIcon from './SortingIcon';

const Wrapper = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSmall};
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  height: 5rem;
  padding: 0 2rem;
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

const InfoHeader = ({ sortingByDate, sortingByAmount, indicators }) => (
  <Wrapper>
    <Label onClick={sortingByDate}>
      Date
      <SortingIcon
        show={indicators.date}
      />
    </Label>
    <Label onClick={sortingByAmount}>
      <SortingIcon
        show={indicators.amount}
      />
      Amount
    </Label>
  </Wrapper>
);

InfoHeader.propTypes = {
  sortingByDate: PropTypes.func.isRequired,
  sortingByAmount: PropTypes.func.isRequired,
  indicators: PropTypes.shape({
    date: PropTypes.oneOf([undefined, 'greatest', 'smallest']),
    amount: PropTypes.oneOf([undefined, 'greatest', 'smallest']),
  }).isRequired,
};

export default InfoHeader;
