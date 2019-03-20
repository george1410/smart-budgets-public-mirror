import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.header`
  height: 5rem;
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.bottomShadow};
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2;
  ${media.tablet`
    display: flex;
    top: 0;
  `}
`;

export default Wrapper;
