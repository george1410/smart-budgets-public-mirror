import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import 'react-virtualized/styles.css';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';

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
`;

const ListWrapper = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  ${media.tablet`
    height: calc(100vh - 10rem);
  `}
`;

class Feed extends React.PureComponent {
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

  render() {
    const { transactions } = this.props;
    return (
      <>
        <Header title="Transactions" />
        <Wrapper>
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
};

Feed.propTypes = {
  transactions: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps)(Feed);
