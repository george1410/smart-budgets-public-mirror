import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  width: 40rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  box-shadow: 0 1px 1px ${props => props.theme.shadowCol};
  margin-bottom: 1rem;
  ${media.phone`
    width: 100%;
  `}
`;

export default Wrapper;
