import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const Feed = ({ transactions }) => (
  <>
    <Header title="Transactions" />
    <Wrapper>
      {
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
      }
    </Wrapper>
  </>
);

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
