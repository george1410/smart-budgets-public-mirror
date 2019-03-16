import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AutoSizer, InfiniteLoader } from 'react-virtualized';
import 'react-virtualized/styles.css';
import FeedHeader from './FeedHeader/FeedHeader';
import FilterDrawer from './FilterDrawer/FilterDrawer';
import SearchDrawer from './SearchDrawer/SearchDrawer';
import colors from '../../util/colors';
import Transaction from './Transaction/Transaction';
import ListHeader from './ListHeader/ListHeader';
import selectTransactions from '../../selectors/transactions';
import { sortByDate, sortByAmount } from '../../actions/filters';
import { startSetTransactions, setTransactionError } from '../../actions/transactions';
import { StyledList, ListWrapper } from './ListStyles';
import Wrapper from './Wrapper';

const Feed = ({
  transactions,
  fetchTransactions,
  // error,
  // dismissError,
  sortingByAmount,
  sortingByDate,
  filters: {
    searchDrawerOpen,
    filterDrawerOpen,
    sortByDate: byDate,
    sortByAmount: byAmount,
  },
}) => {
  const renderRowVirtual = (params) => {
    const transaction = transactions[params.index];
    return (
      <div key={params.key} style={params.style}>
        <Transaction
          key={transaction.transactionId}
          {...transaction}
          shouldShift={searchDrawerOpen}
          color={colors[transaction.displayName].color}
          textCol={colors[transaction.displayName].text}
        />
      </div>
    );
  };

  const fetchMore = () => {
    if (navigator.onLine) {
      fetchTransactions();
    }
  };

  useEffect(() => {
    if (transactions.length === 0) {
      fetchMore();
    }
  }, []);

  const sortByAmountOnClick = () => {
    sortingByAmount();
  };

  const sortByDateOnClick = () => {
    sortingByDate();
  };

  const indicatorInfo = {
    date: byDate,
    amount: byAmount,
  };

  const isRowLoaded = ({ index }) => !!transactions[index];

  return (
    <>
      <FeedHeader />
      <Wrapper>
        <ListHeader
          sortingByAmount={sortByAmountOnClick}
          sortingByDate={sortByDateOnClick}
          indicators={indicatorInfo}
          shouldShift={filterDrawerOpen}
        />
        <ListWrapper>
          <AutoSizer>
            {
              ({ width, height }) => (
                <InfiniteLoader
                  isRowLoaded={isRowLoaded}
                  loadMoreRows={fetchMore}
                  rowCount={Number.MAX_SAFE_INTEGER}
                >
                  {
                    ({ onRowsRendered, registerChild }) => (
                      <StyledList
                        width={width}
                        height={height}
                        rowHeight={70}
                        rowRenderer={renderRowVirtual}
                        rowCount={transactions.length}
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        // forces re-render as the list can see that data has changed
                        data={transactions}
                      />
                    )
                  }
                </InfiniteLoader>
              )
              }
          </AutoSizer>
        </ListWrapper>
      </Wrapper>
      <FilterDrawer />
      <SearchDrawer />
    </>
  );
};

Feed.defaultProps = {
  transactions: [],
  filters: {
    sortByDate: 1,
    sortByAmount: 0,
  },
  // error: '',
};

Feed.propTypes = {
  transactions: PropTypes.instanceOf(Array),
  sortingByAmount: PropTypes.func.isRequired,
  sortingByDate: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    sortByDate: PropTypes.string,
    sortByAmount: PropTypes.string,
  }),
  fetchTransactions: PropTypes.func.isRequired,
  // error: PropTypes.string,
  // dismissError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  transactions: selectTransactions(state.transactions.transactions, state.filters),
  filters: state.filters,
  hasMore: state.transactions.hasMore,
  isLoading: state.transactions.isLoading,
  error: state.transactions.error,
});

const mapDispatchToProps = dispatch => ({
  sortingByDate: () => dispatch(sortByDate()),
  sortingByAmount: () => dispatch(sortByAmount()),
  fetchTransactions: () => dispatch(startSetTransactions()),
  dismissError: () => dispatch(setTransactionError(undefined)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
