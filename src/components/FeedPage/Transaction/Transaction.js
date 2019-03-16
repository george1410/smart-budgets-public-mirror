import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Category from './Category';
import EndLabel from './EndLabel';
import MerchantLabel from './MerchantLabel';
import MiddleGroup from './MiddleGroup';
import Wrapper from './Wrapper';

numeral.register('locale', 'en-gb', {
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  currency: {
    symbol: '£',
  },
});

numeral.locale('en-gb');

const Transaction = ({
  date, merchant, amount, displayName, shouldShift, color, textCol,
}) => (
  <Wrapper shouldShift={shouldShift}>
    <EndLabel>{moment(date).format('DD-MM-YYYY')}</EndLabel>
    <MiddleGroup>
      <MerchantLabel>{merchant.toLowerCase()}</MerchantLabel>
      <Category
        color={color}
        textCol={textCol}
      >
        {displayName.toLowerCase()}
      </Category>
    </MiddleGroup>
    <EndLabel>{numeral(amount).format('$0,0.00')}</EndLabel>
  </Wrapper>
);

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  merchant: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
  shouldShift: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  textCol: PropTypes.string.isRequired,
};

export default Transaction;
