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

const Social = () => (
  <>
    <Header title="Social" />
    <Wrapper>
      <p>This will be the social / home page</p>
    </Wrapper>
  </>
);

export default Social;
