import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter, toggleSearchDrawer } from '../../../actions/filters';
import {
  clearTransactions, setTransactionStart, setHasMore, startSetTransactions,
} from '../../../actions/transactions';
import Wrapper from './Wrapper';
import ClearIcon from './ClearIcon';
import { Input, InputLine } from './Input';
import SearchButton from './SearchButton';

const SearchDrawer = ({
  setSearchText,
  clearFeed,
  setStart,
  setHavingMore,
  fetchTransactions,
  value,
  toggleSearch,
  searchOpen,
  searchText,
}) => {
  const onSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const clearInput = () => {
    if (value !== '') {
      setSearchText('');
      clearFeed();
      setStart();
      setHavingMore();
      fetchTransactions();
    }
  };

  const onSearchSubmit = () => {
    toggleSearch();
    clearFeed();
    setStart();
    setHavingMore();
    fetchTransactions();
  };

  return (
    <Wrapper open={searchOpen}>
      <InputLine>
        <Input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={onSearchChange}
        />
        <ClearIcon clearInput={clearInput} />
      </InputLine>
      <SearchButton
        type="button"
        onClick={onSearchSubmit}
      >
        Search
      </SearchButton>
    </Wrapper>
  );
};

SearchDrawer.defaultProps = {
  searchText: '',
  searchOpen: false,
  value: '',
};

SearchDrawer.propTypes = {
  searchOpen: PropTypes.bool,
  searchText: PropTypes.string,
  clearFeed: PropTypes.func.isRequired,
  setStart: PropTypes.func.isRequired,
  setHavingMore: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  searchText: state.filters.textFilter,
  searchOpen: state.filters.searchDrawerOpen,
  value: state.filters.textFilter,
});

const mapDispatchToProps = dispatch => ({
  setSearchText: text => dispatch(setTextFilter(text)),
  clearFeed: () => dispatch(clearTransactions()),
  setStart: () => dispatch(setTransactionStart(0)),
  setHavingMore: () => dispatch(setHasMore(true)),
  fetchTransactions: () => dispatch(startSetTransactions()),
  toggleSearch: () => dispatch(toggleSearchDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDrawer);
