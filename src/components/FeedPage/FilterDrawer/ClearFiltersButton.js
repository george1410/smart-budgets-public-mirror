import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const ClearFiltersButton = styled.button`
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  border: 1px solid ${props => props.theme.offWhite};
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

  &:active {
    transform: translateY(2px);
  }
`;

export default ClearFiltersButton;
