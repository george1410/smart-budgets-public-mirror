import styled from 'styled-components';
import media from '../../../../util/mediaQueries';

const Wrapper = styled.div`
  background-color: ${props => (props.show ? props.theme.white : props.theme.primaryBlue)};
  padding: 0.5rem 1rem;
  color: ${props => (props.show ? props.theme.primaryBlue : props.theme.white)};
  border: 1px solid ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.fontTiny};
  font-weight: 500;
  outline-color: ${props => props.theme.white};
  margin: 0.5rem;
  width: max-content;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  user-select: none;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.tablet`
    outline-color: -webkit-focus-ring-color;;
    padding: 1rem 2rem;
    text-transform: capitalize;
    background-color: ${props => (props.show ? props.theme.primaryBlue : props.theme.white)};
    color: ${props => (props.show ? props.theme.white : props.theme.primaryBlue)};
    border: 1px solid ${props => (props.show ? props.theme.white : props.theme.primaryBlue)};
    font-size: ${props => props.theme.fontSmall};

    &:hover {
      transform: scale(1);
    }

    &:active {
      transform: scale(0.95);
    }
  `}
  ${media.phone`
    padding: 5px;
  `}
`;

export default Wrapper;
