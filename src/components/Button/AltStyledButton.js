import styled from 'styled-components';
import media from '../../util/mediaQueries';

const AltStyledButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.cardShadow};
  border: 3px solid ${props => props.theme.primaryBlue};
  border-radius: ${props => props.theme.borderRadius};
  user-select: none;
  transition: ${props => props.theme.transition};
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.hoverShadow};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: none;
  }

  ${media.tablet`
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

export default AltStyledButton;
