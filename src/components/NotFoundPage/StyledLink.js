import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: absolute;
  top: 70vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 1.5rem 2.5rem;
  color: #000;
  font-size: 1.8rem;
  text-decoration: none;
  border-bottom: 1px solid #000;
  transition: background-color 0.2s ease-in-out;
  user-select: none;

  &:active {
    transform: translate(-50%, -45%);
  }
`;

export default StyledLink;
