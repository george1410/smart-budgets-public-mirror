import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  background-color: rgba(245, 245, 245, 0.5);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 7rem;
  width: 50rem;
  ${media.phone`
    width: 100%;
  `}
`;

const EndLabel = styled.p`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  flex: 1;

  &:last-of-type {
    text-align: end;
    font-size: ${props => props.theme.fontSmall};
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
  text-transform: capitalize;
`;

const Category = styled.div`
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontTiny};
  padding: 2px 7px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Transaction = ({
  date, merchant, amount, displayName,
}) => (
  <Wrapper>
    <EndLabel>{moment(date).format('DD/MMM/YY')}</EndLabel>
    <Middle>
      <Merchant>{merchant.toLowerCase()}</Merchant>
      <Category>{displayName.toLowerCase()}</Category>
    </Middle>
    <EndLabel>{amount}</EndLabel>
  </Wrapper>
);

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  merchant: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default Transaction;
