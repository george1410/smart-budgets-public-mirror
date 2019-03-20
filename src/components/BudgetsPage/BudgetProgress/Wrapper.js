import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    transform: scale(1.02);
    background-color: ${props => props.theme.primaryBlueShadow};
  }

  &:active {
    transform: scale(0.98);
  }

  ${media.phone`
    width: 100%;
    border-radius: 0;
  `}
`;

export default Wrapper;
