import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const Feed = () => (
  <Wrapper>
    <Header title="Feed" />
    <p>This will show the feed of the transactions.</p>
  </Wrapper>
);

export default Feed;
