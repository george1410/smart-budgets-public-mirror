import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { reduxForm, Field, change } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import media from '../../util/mediaQueries';
import Button from '../Button/Button';
import AltButton from '../Button/AltButton';
import Logo from './Logo.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  ${media.phone`
    padding: 0;
  `}
`;

const LoginWrapper = styled.div`
  background-color: ${props => props.theme.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  min-height: 60rem;
  padding: 5rem;
  box-shadow: 10px 10px 0 ${props => props.theme.primaryBlue};
  ${media.phone`
    width: 100vw;
    height: 100vh;
    min-height: auto;
    background-color: ${props => props.theme.white};
    padding: 4rem;
  `}
`;

const Subtitle = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => (props.err ? props.theme.error : props.theme.grey)};
  margin: 3rem 0 0 0;
`;

const Form = styled.form`
  width: 100%;
  height: 268px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
    height: 238px;
  `}
  ${media.phone`
    font-size: 5rem;
  `}
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
  cursor: text;

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

  /* add space between pw field and log in button */
  :last-of-type {
    /* it is set to -2rem in input, this makes it 4 */
    margin-bottom: 6rem;
  }
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSmall};
  padding: 1rem 1.5rem;
  color: ${props => props.theme.greyLight};
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
  margin-bottom: -2rem;
  padding: 1.5rem 1.5rem;
  font-size: ${props => props.theme.fontSmall};
  border-radius: 0;
  outline: none;
  background: ${props => props.theme.white};
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
  }

  &:focus {
    padding: 2rem 2.5rem 1rem 1.5rem;
    border-bottom: 3px solid ${props => props.theme.primaryBlue};
    box-shadow: 4px 4px 0 ${props => props.theme.greyLightest};
  }

  &:focus:invalid {
    border-bottom: 3px solid ${props => props.theme.error};
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  & > img {
    width: 50%;
  }
`;

class LoginPage extends React.Component {
  onSubmit = (formProps) => {
    const { startSignin: signIn, history } = this.props;
    signIn(formProps, () => history.push('/home'));
  };

  // button to fill with data for development
  onFillFakeLogins = () => {
    const { change: setField } = this.props;
    setField('email', 'hello@georgemccarron.com');
    setField('password', 'password');
  }

  render() {
    const { handleSubmit, errorMsg } = this.props;
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
          <Form onSubmit={handleSubmit(this.onSubmit)}>
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
          <AltButton onClick={this.onFillFakeLogins} title="Fill with demo logins" type="button" />
        </LoginWrapper>
      </Wrapper>
    );
  }
}

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
