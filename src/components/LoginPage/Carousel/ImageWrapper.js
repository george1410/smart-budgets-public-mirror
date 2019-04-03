import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28vw;
  ${media.tablet`
    height: 18rem;
  `}
  ${media.phone`
    height: 22rem;
  `}

  & > svg {
    width: 35vw;
    max-width: 40rem;
    ${media.tablet`
      width: 24rem;
    `}
    ${media.phone`
      width: 60vw;
    `}
  }
`;

export default Wrapper;
