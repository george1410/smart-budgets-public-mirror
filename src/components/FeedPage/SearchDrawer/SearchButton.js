import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const SearchButton = styled.button`
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.primaryBlue};
  border-bottom: 1px solid ${props => props.theme.white};
  cursor: pointer;
  outline-color: white;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
  user-select: none;
  ${media.tablet`
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    border: 1px solid ${props => props.theme.primaryBlue};
    outline-color: -webkit-focus-ring-color;

  `}

  &:active {
    transform: translateY(2px);
  }
`;

export default SearchButton;
