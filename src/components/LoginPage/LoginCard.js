import styled from 'styled-components';
import media from '../../util/mediaQueries';

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 70rem;
  padding: 5rem;
  ${media.tablet`
    width: 100%;
    /* max-width: 40rem; */
  `}
  ${media.phone`
    width: 100vw;
    height: 100vh;
    min-height: auto;
    padding: 4rem;
  `}
`;

export default LoginCard;
