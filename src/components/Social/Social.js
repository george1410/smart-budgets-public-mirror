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

const Social = () => (
  <Wrapper>
    <Header title="Social" />
    <p>This will be the social / home page</p>
  </Wrapper>
);

export default Social;
