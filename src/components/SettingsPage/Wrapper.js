import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 5rem 0;
  height: 100vh;

  & > button {
    max-width: 41rem;
  }

  ${media.tablet`
    margin-top: 5rem;
    height: calc(100vh - 10rem);
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 5rem;
  `}
`;

export default Wrapper;
