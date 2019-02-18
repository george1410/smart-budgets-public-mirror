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

const Settings = () => (
  <Wrapper>
    <Header title="Settings" />
    <p>This will be the settings page.</p>
  </Wrapper>
);

export default Settings;
