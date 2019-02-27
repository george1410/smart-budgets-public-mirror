import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AutoSizer, InfiniteLoader, List as VirtualList } from 'react-virtualized';
import 'react-virtualized/styles.css';
import FeedHeader from './FeedHeader';
import FilterDrawer from './FilterDrawer';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';
import InfoHeader from './InfoHeader';
import selectTransactions from '../../selectors/transactions';
import { sortByDate, sortByAmount, toggleFilterDrawer } from '../../actions/filters';
import { startSetTransactions } from '../../actions/transactions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  position: relative;
  padding: 5rem 0 0 0;
  ${media.tablet`
    padding: 5rem 0;
  `}
`;

const StyledList = styled(VirtualList)`
  height: calc(100vh - 10rem);
  outline: none;
`;

const ListWrapper = styled.div`
  height: calc(100vh - 10rem);
  width: 100%;

  & > div > div::-webkit-scrollbar {
    width: 0;
  }
`;

class Feed extends React.Component {
  renderRowVirtual = ({ index, key, style }) => {
    const { transactions, filters: { drawerOpen } } = this.props;
    const transaction = transactions[index];
    return (
      <div key={key} style={style}>
        <Transaction
          key={transaction.transactionId}
          {...transaction}
          shouldShift={drawerOpen}
        />
      </div>
    );
  }

  componentWillMount = () => {
    this.fetchMore();
  }

  sortByAmountOnClick = () => {
    const { sortingByAmount } = this.props;
    sortingByAmount();
  };

  sortByDateOnClick = () => {
    const { sortingByDate } = this.props;
    sortingByDate();
  };

  getSortIndicatorInfo = () => {
    const { filters } = this.props;
    return {
      date: filters.sortByDate,
      amount: filters.sortByAmount,
    };
  }

  drawerToggle = () => {
    const { toggleDrawer } = this.props;
    toggleDrawer();
  }

  fetchMore = () => {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  isRowLoaded = ({ index }) => {
    const { transactions } = this.props;
    return !!transactions[index];
  }

  render() {
    const { transactions, filters: { drawerOpen } } = this.props;
    return (
      <>
        <FeedHeader
          title="Transactions"
          toggleDrawer={this.drawerToggle}
          drawerOpen={drawerOpen}
        />
        <Wrapper>
          <InfoHeader
            sortingByAmount={this.sortByAmountOnClick}
            sortingByDate={this.sortByDateOnClick}
            indicators={this.getSortIndicatorInfo()}
            shouldShift={drawerOpen}
          />
          <ListWrapper>
            <AutoSizer>
              {
              ({ width, height }) => (
                <InfiniteLoader
                  isRowLoaded={this.isRowLoaded}
                  loadMoreRows={this.fetchMore}
                  rowCount={Number.MAX_SAFE_INTEGER}
                >
                  {
                    ({ onRowsRendered, registerChild }) => (
                      <StyledList
                        width={width}
                        height={height}
                        rowHeight={70}
                        rowRenderer={this.renderRowVirtual}
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
      </>
    );
  }
}

Feed.defaultProps = {
  transactions: [],
  filters: {
    sortByDate: 1,
    sortByAmount: 0,
    drawerOpen: false,
  },
};

Feed.propTypes = {
  transactions: PropTypes.instanceOf(Array),
  sortingByAmount: PropTypes.func.isRequired,
  sortingByDate: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    sortByDate: PropTypes.string,
    sortByAmount: PropTypes.string,
    drawerOpen: PropTypes.bool,
  }),
  fetchTransactions: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  transactions: selectTransactions(state.transactions.transactions, state.filters),
  filters: state.filters,
  hasMore: state.transactions.hasMore,
});

const mapDispatchToProps = dispatch => ({
  sortingByDate: () => dispatch(sortByDate()),
  sortingByAmount: () => dispatch(sortByAmount()),
  toggleDrawer: () => dispatch(toggleFilterDrawer()),
  fetchTransactions: () => dispatch(startSetTransactions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
