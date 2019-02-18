import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';
import Transaction from '../Transaction/Transaction';

const Wrapper = styled.div`
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const Feed = () => (
  <Wrapper>
    <Header title="Transactions" />
    <Transaction
      date="2019-01-13T00:00:00.000Z"
      merchant="MISC DIY"
      amount={25}
      category="BILLS"
    />
  </Wrapper>
);

export default Feed;
