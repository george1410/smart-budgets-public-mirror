import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  width: 40rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  margin-bottom: 5rem;
  border-radius: ${props => props.theme.borderRadius};
  ${media.phone`
    margin-bottom: 2rem;
    width: 100%;
    border-radius: 0;
  `}
`;

export default Wrapper;
