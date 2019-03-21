import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  height: 100vh;
  background-color: ${props => props.theme.primaryBlue};

  & > button {
    max-width: 41rem;
  }

  ${media.tablet`
    height: 100vh;
    padding-bottom: ${props => props.theme.bottomPad};
  `}
  ${media.phone`
    padding-top: 7rem;
  `}
`;

export default Wrapper;
