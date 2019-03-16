import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const ApplyFiltersButton = styled.button`
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  border: 1px solid ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.primaryBlue};
  border-bottom: 1px solid ${props => props.theme.white};
  transition: all 0.2s ease-in-out;
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

  &:active {
    transform: translateY(2px);
  }
`;

export default ApplyFiltersButton;
