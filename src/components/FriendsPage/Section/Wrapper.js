import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`
    width: 100%;
  `}
`;

export default Wrapper;
