import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  position: relative;
  padding: 5rem 0 0 0;
  ${media.tablet`
    padding: 5rem 0 ${props => (props.theme.isX ? '10rem' : '5rem')} 0;
  `}
`;

export default Wrapper;
