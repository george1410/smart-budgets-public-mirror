import styled from 'styled-components';
import media from '../../util/mediaQueries';

const LoginCard = styled.div`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  min-height: 70rem;
  padding: 5rem;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
  ${media.phone`
    width: 100vw;
    height: 100vh;
    min-height: auto;
    padding: 4rem;
  `}
`;

export default LoginCard;
