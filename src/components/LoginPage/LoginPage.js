import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { reduxForm, Field, change } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import media from '../../util/mediaQueries';
import Button from '../Button/Button';
import Logo from './Logo.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primaryBlue};
  ${media.phone`
    padding: 0;
  `}
`;

const LoginWrapper = styled.div`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  min-height: 70rem;
  padding: 5rem;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
  ${media.phone`
    width: 100vw;
    height: 100vh;
    min-height: auto;
    padding: 4rem;
  `}
`;

const Subtitle = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => (props.err ? props.theme.error : props.theme.grey)};
  margin: 3rem 0;
`;

const Form = styled.form`
  width: 100%;
  padding-top: 0 !important;
  ${media.phone`
    font-size: 5rem;
  `}
`;

const InputWrapper = styled.div`
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

const Label = styled.label`
  font-size: ${props => props.theme.fontSmall};
  padding: 1rem 1.5rem;
  color: ${props => props.theme.greyLight};
  position: absolute;
  top: -3.7rem;
  cursor: text;
  user-select: none;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  ${media.phone`
    color: ${props => props.theme.grey};
  `}

  /* needs constant height to counter font-size change on focus */
  height: 4rem;
`;

const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 1.5rem 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  border-radius: 0;
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

const Icon = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 15rem;
  }
`;

const LoginPage = ({
  startSignin,
  history,
  change: setField,
  handleSubmit,
  errorMsg,
}) => {
  const onSubmit = (formProps) => {
    startSignin(formProps, () => history.push('/home'));
  };

  // button to fill with data for development
  const onFillFakeLogins = () => {
    setField('email', 'hello@georgemccarron.com');
    setField('password', 'password');
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <Icon>
          <img alt="logo" src={Logo} />
        </Icon>
        <Subtitle err={!!errorMsg}>
          {
            errorMsg || 'Please log in to get started.'
          }
        </Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Input
              id="email"
              name="email"
              type="text"
              component="input"
              placeholder="Email"
            />
            <Label htmlFor="email">
                Email
            </Label>
          </InputWrapper>
          <InputWrapper>
            <Input
              id="password"
              name="password"
              type="password"
              component="input"
              placeholder="password"
            />
            <Label htmlFor="password">
                Password
            </Label>
          </InputWrapper>
          <Button title="Log In" type="submit" />
        </Form>
        <Button altbtn style={{ marginTop: '2rem' }} onClick={onFillFakeLogins} title="Fill with demo logins" type="button" />
      </LoginWrapper>
    </Wrapper>
  );
};

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
  startSignin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ auth: { error } }) => ({
  errorMsg: error,
});

export default compose(
  connect(mapStateToProps, { ...actions, change }),
  reduxForm({ form: 'signup' }),
)(LoginPage);
