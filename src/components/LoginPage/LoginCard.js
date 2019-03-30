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
  box-shadow: ${props => props.theme.cardShadow};
  border-radius: ${props => props.theme.borderRadius};
  ${media.phone`
    width: 100vw;
    height: 100vh;
    min-height: auto;
    padding: 4rem;
  `}
`;

export default LoginCard;
