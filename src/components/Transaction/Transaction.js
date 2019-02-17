import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  background-color: rgba(245, 245, 245, 0.5);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 7rem;
`;

const EndLabel = styled.p`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  flex: 1;

  &:last-of-type {
    text-align: end;
  }
`;

const Middle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Merchant = styled.div`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.black};
  font-weight: 500;
`;

const Category = styled.div`
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSmall};
  padding: 2px 7px;
  font-weight: 500;
`;

const Transaction = ({
  date, merchant, amount, category,
}) => (
  <Wrapper>
    <EndLabel>{moment(date).format('DD/MMM/YY')}</EndLabel>
    <Middle>
      <Merchant>{merchant}</Merchant>
      <Category>{category}</Category>
    </Middle>
    <EndLabel>{amount}</EndLabel>
  </Wrapper>
);

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  merchant: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Transaction;
