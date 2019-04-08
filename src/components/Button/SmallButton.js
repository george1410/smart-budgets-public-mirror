import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  user-select: none;
  border: 3px solid ${props => (props.highlight ? props.theme.primaryBlue : props.theme.white)};
  transition: ${props => props.theme.transition};
  font-weight: 500;
`;

export default Button;
