import React from 'react';
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Header from '../Header/Header';
import styled from 'styled-components';
import media from '../../util/mediaQueries';
import CategoryProgress from '../CategoryProgress/CategoryProgress';

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

    <p>Budget 1</p>
    <Progress percent={80} />

    <p>Budget 2</p>
    <Progress percent={30} status="active" />

    <p>Total Budget</p>
    <Progress type="circle" percent={70} />

    <p>Category Progress</p>
    <CategoryProgress budget={100} spend={10} />
  </Wrapper>
);

export default Overview;
