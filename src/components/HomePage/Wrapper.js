import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  padding: 5rem 0 0 0;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

export default Wrapper;
