import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 2rem 5rem 2rem;
  ${media.tablet`
    padding-bottom: ${props => props.theme.bottomPad};
  `}
`;

export default Wrapper;
