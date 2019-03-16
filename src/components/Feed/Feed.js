import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AutoSizer, InfiniteLoader, List as VirtualList } from 'react-virtualized';
import 'react-virtualized/styles.css';
import FeedHeader from './FeedHeader';
import FilterDrawer from './FilterDrawer';
import SearchDrawer from './SearchDrawer';
import media from '../../util/mediaQueries';
import colors from '../../util/colors';
import Transaction from '../Transaction/Transaction';
import InfoHeader from './InfoHeader';
import selectTransactions from '../../selectors/transactions';
import { sortByDate, sortByAmount } from '../../actions/filters';
import { startSetTransactions, setTransactionError } from '../../actions/transactions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  position: relative;
  padding: 5rem 0 0 0;
  ${media.tablet`
    padding: 5rem 0 ${props => (props.theme.isX ? '10rem' : '5rem')} 0;
  `}
`;

const StyledList = styled(VirtualList)`
  height: ${props => props.theme.innerHeight};
  outline: none;
`;

const ListWrapper = styled.div`
  height: ${props => props.theme.innerHeight};
  width: 100%;

  & > div > div::-webkit-scrollbar {
    width: 0;
  }
`;

const Feed = ({
  transactions,
  fetchTransactions,
  error,
  dismissError,
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
        <InfoHeader
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
  error: '',
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
  error: PropTypes.string,
  dismissError: PropTypes.func.isRequired,
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
