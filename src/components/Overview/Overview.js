import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `};
`;

const Overview = () => (
  <Wrapper>
    <Header title="Overview" />
    <p>This will show the overview for the budgets.</p>
  </Wrapper>
);

export default Overview;
