import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

class Feed extends React.PureComponent {
  renderRow2 = transaction => (
    <Transaction
      key={transaction.transactionId}
      {...transaction}
    />
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
          <List
            height={500}
            width={window.innerWidth}
            itemCount={transactions.length}
            itemSize={70}
          >
            {
              this.renderRow
            }
          </List>
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
