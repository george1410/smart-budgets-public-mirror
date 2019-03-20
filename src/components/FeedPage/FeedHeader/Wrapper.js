import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.header`
  height: 5rem;
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.white};
  box-shadow: 0 0 5px ${props => props.theme.shadowCol};
  display: none;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  z-index: 6;
  ${media.tablet`
    display: flex;
    top: 0;
  `}
`;

export default Wrapper;
