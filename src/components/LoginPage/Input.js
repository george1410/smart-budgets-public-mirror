import styled from 'styled-components';
import { Field } from 'redux-form';
import media from '../../util/mediaQueries';

export const InputWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-flow: column-reverse;
  position: relative;
  margin-bottom: 2rem;

  /* this moves the label into the input field */
  input:placeholder-shown + label {
    /* transform: translateY(calc(3.5rem + 3px)); */
    transform: translateY(calc(4.5rem + 3px));
  }

  /* when placeholder should not be shown, move label above */
  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translateY(calc(3.2rem + 3px));
    font-size: ${props => props.theme.fontTiny};
    font-weight: 500;
    color: ${props => props.theme.grey};
  }

  /* if input field is filled, keep the new padding */
  input:not(:placeholder-shown) {
    padding: 2rem 2.5rem 1rem 1.5rem;
  }

  :last-of-type {
    margin-bottom: 4rem;
  }
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 1.5rem 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;
  background: ${props => props.theme.offWhite};
  border: none;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: all 0.3s ease-out;
  font-family: inherit;
  color: #000;
  ${media.phone`
    background: ${props => props.theme.offWhite};
`}

  &::placeholder {
    /* placeholder needs to be present, for label animations
       however, we don't want to actually see it */
    opacity: 0;
    position: absolute;
  }

  &:focus {
    padding: 2rem 2.5rem 1rem 1.5rem;
    border-bottom: 3px solid ${props => props.theme.primaryBlue};
  }

  &:focus:invalid {
    border-bottom: 3px solid ${props => props.theme.error};
  }
`;
