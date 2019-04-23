import styled from 'styled-components';
import media from '../../util/mediaQueries';

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${media.tablet`
    width: 100%;
  `}
`;

export default LoginCard;
