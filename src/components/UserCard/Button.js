import styled from 'styled-components';
import media from '../../util/mediaQueries';

const Button = styled.button`
  background-color: ${props => (props.decline ? props.theme.error : props.theme.primaryBlue)};
  border: none;
  color: ${props => props.theme.white};
  width: ${props => (props.wide ? '13rem' : '9rem')};
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};

  &:last-of-type {
    margin-left: 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background-color: ${props => props.theme.grey};
    cursor: default;
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.tablet`
    &:hover {
      transform: scale(1);
    }

    &:active {
      transform: scale(0.95);
    }
  `}
`;

export default Button;
