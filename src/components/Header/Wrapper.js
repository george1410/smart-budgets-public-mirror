import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.header`
  height: 5rem;
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.translucentWhite};
  /* background-color: ${props => props.theme.white}; */
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2;
  box-shadow: ${props => props.theme.bottomShadow};
  ${media.tablet`
    display: flex;
    top: 0;
    padding: 0 2rem;
  `}
`;

export default Wrapper;
