import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CategorySelector from './CategorySelector/CategorySelector';
import media from '../../util/mediaQueries';
import {
  setFilterCategory, setStartDate, setEndDate, toggleFilterDrawer,
  clearFilters, setMinAmount, setMaxAmount,
} from '../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../actions/transactions';

/*
Calculations for CSS:
  Transaction has width of 50rem;
  gutter between the filter component and the list is 2 rem
  on screens > 992px the list will be centered, otherwise:
    the half of (100vw - filter - gutter - list) will be
    left and right margins. i.e.:
    vw > 992px:
    max:30rem-2rem-centered Transactions list
    Desktop:
    marginLeft-20rem-2rem-50rem-marginRight
    Tablet:
    Filter component occupies "full screen"
 */

const Wrapper = styled.div`
  display: flex;
  right: calc((100vw - 50rem) / 2 + 52rem);
  margin-left: 2rem;
  top: 10rem;
  position: absolute;
  width: calc((100vw - 58rem) / 2);
  max-width: 30rem;
  flex-direction: column;
  background-color: ${props => props.theme.primaryBlue};
  padding: 1rem;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  ${media.desktop`
    top: 23rem;
    right: calc((100vw - 72rem) / 2 + 52rem);
    width: 20rem;
    margin-left: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    overflow: auto;
    width: 100vw;
    right: auto;
    margin-left: auto;
    max-width: 100%;
    padding: 1rem 5rem;
    opacity: ${props => (props.visible ? '1' : '0')};
    background-color: ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    position: fixed;
    max-height: ${props => (props.visible ? props.theme.innerHeight : '0')};
    top: 5rem;
    bottom: ${props => (props.theme.isX ? '10rem' : '5rem')};
    & * {
      visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    }
  `}
  ${media.phone`
    justify-content: space-around;
    padding: 1rem;
  `}
`;

const Group = styled.div`
  display: flex;
  flex-direction: ${props => (props.col ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.white};
  margin-bottom: 1rem;
  user-select: none;
  ${media.tablet`
    color: ${props => props.theme.black};
    display: none;
  `}
`;

const GroupName = styled.div`
  font-size: ${props => props.theme.fontSmall};
  width: 100%;
  padding-bottom: 2px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  user-select: none;
  ${media.tablet`
    border-bottom: 1px solid ${props => props.theme.offWhite};
    color: ${props => props.theme.black};
  `}
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 0;
  color: ${props => props.theme.white};
  ${media.tablet`
    color: ${props => props.theme.black};
  `}
  ${media.phone`
    flex-direction: row;
    padding: 0;
  `}
`;

const DatePicker = styled.input.attrs({
  type: 'date',
})`
  appearance: none;
  height: 3rem;
  padding: 4px 8px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  margin-top: 0.5rem;
  min-width: 14rem;
  width: 90%;
  border-radius: 0;
  background-color: ${props => props.theme.white};
  ${media.desktop`
    width: 18rem;
  `}
  ${media.tablet`
    width: auto;
    font-size: ${props => props.theme.fontSmall};
    padding: 0.5rem 1rem;
  `}
  ${media.phone`
    margin-left: 2px;
  `}
`;

const AmountPicker = styled.input`
  padding: 4px 8px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.primaryBlue};
  margin-top: 0.5rem;
  width: 10rem;
  border-radius: 0;
  ${media.tablet`
    font-size: ${props => props.theme.fontSmall};
    padding: 0.5rem 1rem;
    :first-of-type {
      margin-right: 1rem;
    }
  `}
  ${media.phone`
    margin-left: 0.5rem;
  `}
`;

const Apply = styled.button`
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  border: 1px solid ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.primaryBlue};
  border-bottom: 1px solid ${props => props.theme.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline-color: white;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontMedium};
    outline-color: -webkit-focus-ring-color;
    padding: 0.5rem 2rem;
    border: 1px solid ${props => props.theme.white};
    background-color: ${props => props.theme.primaryBlue};
    color: ${props => props.theme.white};
    border-bottom: 1px solid ${props => props.theme.primaryBlue};
  `}
  ${media.phone`
    margin-bottom: 1rem;
  `}

  &:active {
    transform: translateY(2px);
  }
`;

const ClearFiltersButton = styled.button`
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  border: 1px solid ${props => props.theme.offWhite};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.offWhite};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline-color: white;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontSmall};
    outline-color: -webkit-focus-ring-color;
    padding: 0.5rem 2rem;
    color: ${props => props.theme.error};
    border: 1px solid ${props => props.theme.error};
    background-color: ${props => props.theme.white};
  `}

  &:active {
    transform: translateY(2px);
  }
`;

const FilterDrawer = ({
  setDateStart,
  setDateEnd,
  clearFeed,
  setStart,
  setHavingMore,
  fetchTransactions,
  toggleFilters,
  clear,
  setMin,
  setMax,
  visible,
  categories,
  selectCategory,
  shownCategories,
  startDate,
  endDate,
  minAmount,
  maxAmount,
}) => {
  const onStartDateChange = (e) => {
    const date = e.target.value;
    setDateStart(date);
  };

  const onEndDateChange = (e) => {
    const date = e.target.value;
    setDateEnd(date);
  };

  const onApplyFilters = () => {
    clearFeed();
    setStart();
    setHavingMore();
    fetchTransactions();
    toggleFilters();
  };

  const onClear = () => {
    clear();
    clearFeed();
    setStart();
    setHavingMore();
    fetchTransactions();
  };

  const onMinAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setMin(amount);
    }
  };

  const onMaxAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setMax(amount);
    }
  };
  return (
    <Wrapper visible={visible}>
      <Title>Filter</Title>
      <GroupName>Amount</GroupName>
      <Group>
        <Label>
            Min
          <AmountPicker type="text" value={minAmount || ''} onChange={onMinAmountChange} />
        </Label>
        <Label>
            Max
          <AmountPicker type="text" value={maxAmount || ''} onChange={onMaxAmountChange} />
        </Label>
      </Group>
      <GroupName>Date</GroupName>
      <Group col>
        <Label>
            StartDate
          <DatePicker type="date" value={startDate || ''} onChange={onStartDateChange} />
        </Label>
        <Label>
            EndDate
          <DatePicker type="date" value={endDate} onChange={onEndDateChange} />
        </Label>
      </Group>
      <GroupName>Categories</GroupName>
      <Group>
        {
            categories.map(category => (
              <CategorySelector
                key={category.id[0]}
                displayName={category.displayName}
                select={selectCategory}
                ids={category.id}
                visible={shownCategories.includes(category.id[0])}
              />
            ))
          }
      </Group>
      <Apply type="button" onClick={onApplyFilters}>Apply Filters</Apply>
      <ClearFiltersButton type="button" onClick={onClear}>Clear Filters</ClearFiltersButton>
    </Wrapper>
  );
};

FilterDrawer.defaultProps = {
  visible: false,
  categories: [],
  shownCategories: [],
  startDate: '',
  minAmount: '',
  maxAmount: '',
};

FilterDrawer.propTypes = {
  visible: PropTypes.bool,
  categories: PropTypes.instanceOf(Array),
  selectCategory: PropTypes.func.isRequired,
  shownCategories: PropTypes.instanceOf(Array),
  setDateEnd: PropTypes.func.isRequired,
  setDateStart: PropTypes.func.isRequired,
  clearFeed: PropTypes.func.isRequired,
  setStart: PropTypes.func.isRequired,
  setHavingMore: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string.isRequired,
  setMin: PropTypes.func.isRequired,
  setMax: PropTypes.func.isRequired,
  minAmount: PropTypes.string,
  maxAmount: PropTypes.string,
};

const mapStateToProps = state => ({
  startDate: state.filters.startDate,
  endDate: state.filters.endDate,
  visible: state.filters.filterDrawerOpen,
  categories: state.categories.categories,
  shownCategories: state.filters.shownCategories,
  minAmount: state.filters.minAmount,
  maxAmount: state.filters.maxAmount,
});

const mapDispatchToProps = dispatch => ({
  selectCategory: ids => dispatch(setFilterCategory(ids)),
  setDateStart: date => dispatch(setStartDate(date)),
  setDateEnd: date => dispatch(setEndDate(date)),
  clearFeed: () => dispatch(clearTransactions()),
  setStart: () => dispatch(setTransactionStart(0)),
  setHavingMore: () => dispatch(setHasMore(true)),
  fetchTransactions: () => dispatch(startSetTransactions()),
  toggleFilters: () => dispatch(toggleFilterDrawer()),
  clear: () => dispatch(clearFilters()),
  setMax: amount => dispatch(setMaxAmount(amount)),
  setMin: amount => dispatch(setMinAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);
