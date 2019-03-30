import styled from 'styled-components';
import media from '../../util/mediaQueries';

const LogoutButton = styled.button`
  width: 20rem;
  cursor: pointer;
  padding: 1rem;
  font-size: ${props => props.theme.fontSmall};
  font-family: inherit;
  color: ${props => props.theme.white};
  font-weight: 500;
  background-color: ${props => props.theme.primaryBlue};
  box-shadow: ${props => props.theme.cardShadow};
  /* border: 1px solid ${props => props.theme.primaryBlue}; */
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  user-select: none;
  transition: ${props => props.theme.transition};
  position: relative;

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

export default LogoutButton;
