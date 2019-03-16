import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchIcon from './SearchIcon';
import { toggleSearchDrawer, toggleFilterDrawer } from '../../../actions/filters';
import Wrapper from './Wrapper';
import Title from './Title';
import FilterIcon from './FilterIcon';

const FeedHeader = ({
  toggleFilters,
  filterOpen,
  searchOpen,
  toggleSearch,
}) => (
  <Wrapper>
    <SearchIcon toggleSearch={toggleSearch} open={searchOpen} />
    <Title>
        Transactions
    </Title>
    <FilterIcon checked={filterOpen} toggleFilters={toggleFilters} />
  </Wrapper>
);

FeedHeader.defaultProps = {
  searchOpen: false,
  filterOpen: false,
};

FeedHeader.propTypes = {
  searchOpen: PropTypes.bool,
  filterOpen: PropTypes.bool,
  toggleSearch: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchText: state.filters.textFilter,
  searchOpen: state.filters.searchDrawerOpen,
  filterOpen: state.filters.filterDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleSearch: () => dispatch(toggleSearchDrawer()),
  toggleFilters: () => dispatch(toggleFilterDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedHeader);
