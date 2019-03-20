import styled from 'styled-components';

const LogoutButton = styled.button`
  width: 20rem;
  cursor: pointer;
  padding: 1rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.primaryBlue};
  font-weight: 500;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.cardShadow};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  user-select: none;

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

export default LogoutButton;
