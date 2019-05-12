import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 50rem;
  height: 20rem;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.color};
  box-shadow: ${props => props.theme.cardShadow};

  &:hover {
    transform: translateX(20px);
  }

  &:active {
    transform: translateX(20px) scale(0.98);
  }

  ${media.tablet`
    &:hover {
      transform: translate(0,0);
    }
    &:active {
      transform: translateX(0px) scale(1);
    }
  `}

  ${media.phone`
    width: 100%;
  `}
`;

export default Wrapper;
