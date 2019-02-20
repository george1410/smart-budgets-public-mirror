import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import 'react-virtualized/styles.css';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';
import InfoHeader from './InfoHeader';
import selectTransactions from '../../selectors/transactions';
import { sortByDate, sortByAmount } from '../../actions/filters';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
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
  height: calc(100vh - 5rem);
  width: 100%;
  ${media.tablet`
    height: calc(100vh - 10rem);
  `}

  & > div > div::-webkit-scrollbar {
    width: 0;
  }
`;

class Feed extends React.Component {
  renderRowVirtual = ({ index, key, style }) => {
    const { transactions } = this.props;
    const transaction = transactions[index];

    return (
      <div key={key} style={style}>
        <Transaction
          key={transaction.transactionId}
          {...transaction}
        />
      </div>
    );
  }

  sortByAmountOnClick = () => {
    const { filters, sortingByAmount } = this.props;
    const sortOrder = filters.sortByAmount === 'greatest' ? 'smallest' : 'greatest';
    sortingByAmount(sortOrder);
  };

  sortByDateOnClick = () => {
    const { filters, sortingByDate } = this.props;
    const sortOrder = filters.sortByDate === 'greatest' ? 'smallest' : 'greatest';
    sortingByDate(sortOrder);
  };

  getSortIndicatorInfo = () => {
    const { filters } = this.props;
    return {
      date: filters.sortByDate,
      amount: filters.sortByAmount,
    };
  }

  render() {
    const { transactions } = this.props;
    return (
      <>
        <Header
          title="Transactions"
        />
        <Wrapper>
          <InfoHeader
            sortingByAmount={this.sortByAmountOnClick}
            sortingByDate={this.sortByDateOnClick}
            indicators={this.getSortIndicatorInfo()}
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
      </>
    );
  }
}

Feed.defaultProps = {
  transactions: [],
  filters: {
    sortByDate: 1,
    sortByAmount: 0,
  },
};

Feed.propTypes = {
  transactions: PropTypes.instanceOf(Array),
  sortingByAmount: PropTypes.func.isRequired,
  sortingByDate: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    sortByDate: PropTypes.string,
    sortByAmount: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  transactions: selectTransactions(state.transactions, state.filters),
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  sortingByDate: order => dispatch(sortByDate(order)),
  sortingByAmount: order => dispatch(sortByAmount(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
