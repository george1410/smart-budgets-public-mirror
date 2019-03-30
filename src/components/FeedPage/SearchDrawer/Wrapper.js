import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  left: calc((100vw - 50rem) / 2 + 52rem);
  top: 10rem;
  position: absolute;
  width: calc((100vw - 58rem) / 2);
  max-width: 30rem;
  margin-right: 2rem;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  box-shadow: ${props => props.theme.cardShadow};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  justify-content: space-around;
  height: 11rem;
  z-index: 5;
  outline-color: white;
  ${media.desktop`
    margin-left: 0;
    margin-right: 2rem;
    right: calc((100vw - 50rem) / 2 + 52rem);
    left: calc((100vw - 72rem) / 2);
    width: 20rem;
  `}
  ${media.tablet`
    border-radius: 0;
    padding: 0;
    left: auto;
    height: ${props => (props.open ? '11' : '0')}rem;
    right: auto;
    margin-left: auto;
    max-width: 100%;
    top: 5rem;
    width: 100vw;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.bottomShadow};
    transition: all 0.3s ease-in;
    & * {
      opacity: ${props => (props.open ? '1' : '0')};
      visibility: ${props => (props.open ? 'visible' : 'hidden')};
    }
  `}
`;

export default Wrapper;
