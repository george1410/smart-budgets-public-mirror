import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 50rem;
  width: 100%;
  ${media.phone`
    flex-direction: column;
    width: 100%;
  `}
`;

export default Wrapper;
