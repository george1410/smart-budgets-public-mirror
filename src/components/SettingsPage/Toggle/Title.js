import styled from 'styled-components';

const Title = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: capitalize;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.white};
`;

export default Title;
