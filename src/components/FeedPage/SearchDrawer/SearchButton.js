import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const SearchButton = styled.button`
  font-size: ${props => props.theme.fontSmall};
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.primaryBlue};
  border: 1px solid ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  outline-color: white;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
  user-select: none;
  box-shadow: ${props => props.theme.cardShadow};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }

  ${media.tablet`
    border: 1px solid ${props => props.theme.primaryBlue};
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    outline-color: -webkit-focus-ring-color;

    &:hover {
      transform: scale(1);
      box-shadow: ${props => props.theme.cardShadow};
    }

    &:active {
      transform: scale(0.95);
      box-shadow: none;
    }
  `}
`;

export default SearchButton;
