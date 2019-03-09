import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/mediaQueries';
import SortingIcon from './SortingIcon';

// for margin-rigth calcs look at FilterDrawer

const Wrapper = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSmall};
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  margin-right: calc((100vw - 50rem) / 2);
  width: 50rem;
  min-height: 5rem;
  padding: 0 2rem;
  box-shadow: 0 1px 0 ${props => props.theme.primaryBlue};
  ${media.desktop`
    margin-right: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    align-self: center;
    margin-right: 0;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

const Label = styled.div`
  color: ${props => props.theme.primaryBlue};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const InfoHeader = ({
  sortingByDate, sortingByAmount, indicators, shouldShift,
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
