import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const ClearFiltersButton = styled.button`
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  border: 1px solid ${props => props.theme.offWhite};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.offWhite};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline-color: white;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontSmall};
    outline-color: -webkit-focus-ring-color;
    padding: 0.5rem 2rem;
    color: ${props => props.theme.error};
    border: 1px solid ${props => props.theme.error};
    background-color: ${props => props.theme.white};
  `}

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }
`;

export default ClearFiltersButton;
