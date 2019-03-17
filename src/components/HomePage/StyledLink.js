import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSmall};
  height: 3rem;
  width: 20rem;
  text-decoration: none;

  &:active {
    transform: translateY(4px);
  }
`;

export default StyledLink;
