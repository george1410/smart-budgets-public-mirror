import React from 'react';
import PropTypes from 'prop-types';
import SortingIcon from './SortingIcon';
import Label from './Label';
import Wrapper from './Wrapper';

const InfoHeader = ({
  sortingByDate,
  sortingByAmount,
  indicators,
  shouldShift,
}) => (
  <Wrapper shouldShift={shouldShift}>
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
  shouldShift: PropTypes.bool.isRequired,
};

export default InfoHeader;
