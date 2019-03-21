import styled from 'styled-components';
import media from '../../util/mediaQueries';

const NavigationBar = styled.nav`
  display: flex;
  position: fixed;
  background-color: ${props => props.theme.white};
  align-items: ${props => (props.theme.isX ? 'flex-start' : 'center')};
  width: 100%;
  height: 5rem;
  z-index: 6;
  font-weight: 500;
  ${media.tablet`
    position: fixed;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.topShadow};
    justify-content: space-around;
    width: 100%;
    height: ${props => props.theme.navHeight};
    bottom: 0;
  `}
`;

export default NavigationBar;
