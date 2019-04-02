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
  ${media.phone`
    width: 100%;
    height: 90%;
  `}
`;

export default LoginCard;
