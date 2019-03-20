import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const ApplyFiltersButton = styled.button`
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  border: 1px solid ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.cardShadow};
  color: ${props => props.theme.primaryBlue};
  transition: ${props => props.theme.transition};
  cursor: pointer;
  outline-color: white;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontMedium};
    outline-color: -webkit-focus-ring-color;
    padding: 0.5rem 2rem;
    border: 1px solid ${props => props.theme.white};
    background-color: ${props => props.theme.primaryBlue};
    color: ${props => props.theme.white};
    border-bottom: 1px solid ${props => props.theme.primaryBlue};
  `}
  ${media.phone`
    margin-bottom: 1rem;
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

export default ApplyFiltersButton;
