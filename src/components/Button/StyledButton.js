import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primaryBlue};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  user-select: none;
  border-bottom: 3px solid ${props => props.theme.primaryBlue};
  border-top: 3px solid ${props => props.theme.primaryBlue};
  transition: ${props => props.theme.transition};

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

export default Button;
