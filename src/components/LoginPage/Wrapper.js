import styled from 'styled-components';
import media from '../../util/mediaQueries';

// Wrapper for the login page

const Wrapper = styled.div`
  min-width: 100vw;
  height: 100vh;
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
