import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50rem;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.primaryBlueShadow};
  }

  ${media.phone`
    width: 100%;
  `}
`;

export default Wrapper;
