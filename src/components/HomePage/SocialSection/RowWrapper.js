import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 50rem;
  width: 100%;
  ${media.phone`
    flex-direction: column;
  `}
`;

export default RowWrapper;
