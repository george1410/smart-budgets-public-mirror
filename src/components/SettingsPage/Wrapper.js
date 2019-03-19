import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  height: 100vh;

  & > button {
    max-width: 41rem;
  }

  ${media.tablet`
    margin-top: 5rem;
    padding: 0 0 5rem 0;
    height: ${props => props.theme.innerHeight};
  `}
`;

export default Wrapper;
