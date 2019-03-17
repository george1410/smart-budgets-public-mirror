import styled from 'styled-components';

const Message = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${props => props.theme.primaryBlue};
  padding: 1.5rem 2.5rem;
  color: ${props => props.theme.white};
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 1.8rem;
  text-align: center;
`;

export default Message;
