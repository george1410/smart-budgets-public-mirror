import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.offWhite};
  ${media.phone`
    padding: 0;
  `}
`;

export default Wrapper;
