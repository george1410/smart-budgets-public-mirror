import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FixedSizeList as List } from 'react-window';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import 'react-virtualized/styles.css';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';

const Wrapper = styled.div`
  /* margin-top: 5rem; */
  display: flex;
  flex-direction: column;
  /* background-color: salmon; */
  /* height: calc(100vh - 10rem); */
  height: 100vh;
  width: 100vw;
  align-items: center;
  /* justify-content: center; */
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const StyledList = styled(VirtualList)`
  height: calc(100vh - 10rem);
/* set height to be 100vh minus the headers and navigation */
`;

class Feed extends React.PureComponent {
  renderRowVirtual = ({ index, key, style }) => (
    <div key={key} style={style}>
      <Transaction
        key={this.props.transactions[index].transactionId}
        {...this.props.transactions[index]}
      />
    </div>
  )

  renderRow = ({ index, style }) => {
    const transaction = this.props.transactions[index];

    return (
      <div
        style={style}
      >
        <Transaction
          // key={key}
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
          {/* <div>
            {
              transactions.map(this.renderRow)
            }
          </div> */}
          {/* <List
            height={500}
            width={window.innerWidth}
            itemCount={transactions.length}
            itemSize={70}
          >
            {
              this.renderRow
            }
          </List> */}
          <div style={{ height: 'calc(100vh - 10rem)', width: '100%', position: 'fixed' }}>
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
          </div>
          {/* {
            transactions.length === 0 ? (
              <p>No categories to show</p>
            ) : (
              transactions.map(
                transaction => (
                  <Transaction
                    key={transaction.transactionId}
                    {...transaction}
                  />
                ),
              )
            )
          } */}
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
