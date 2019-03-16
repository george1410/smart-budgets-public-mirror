import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategorySelector from './CategorySelector/CategorySelector';
import {
  setFilterCategory, setStartDate, setEndDate, toggleFilterDrawer,
  clearFilters, setMinAmount, setMaxAmount,
} from '../../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../../actions/transactions';
import AmountPicker from './AmountPicker';
import ApplyFitlersButton from './ApplyFiltersButton';
import ClearFiltersButton from './ClearFiltersButton';
import DatePicker from './DatePicker';
import { Group, GroupName, Label } from './Group';
import Title from './Title';
import Wrapper from './Wrapper';

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
      <ApplyFitlersButton type="button" onClick={onApplyFilters}>Apply Filters</ApplyFitlersButton>
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
