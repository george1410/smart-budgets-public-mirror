import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import 'react-virtualized/styles.css';
import FeedHeader from './FeedHeader';
import FilterDrawer from './FilterDrawer';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';
import InfoHeader from './InfoHeader';
import selectTransactions from '../../selectors/transactions';
import { sortByDate, sortByAmount, toggleFilterDrawer } from '../../actions/filters';

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
                <StyledList
                  width={width}
                  height={height}
                  rowHeight={70}
                  rowRenderer={this.renderRowVirtual}
                  rowCount={transactions.length}
                  // forces re-render as the list can see that data has changed
                  data={transactions}
                />
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
};

const mapStateToProps = state => ({
  transactions: selectTransactions(state.transactions, state.filters),
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  sortingByDate: () => dispatch(sortByDate()),
  sortingByAmount: () => dispatch(sortByAmount()),
  toggleDrawer: () => dispatch(toggleFilterDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
