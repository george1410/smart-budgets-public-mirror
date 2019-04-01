import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, change } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/auth';
import Button from '../Button/Button';
import Form from './Form';
import { Input, InputWrapper } from './Input';
import Label from './Label';
import LoginCard from './LoginCard';
import Logo from './Logo';
import Subtitle from './Subtitle';
// import Wrapper from './Wrapper';

const LoginSide = ({
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
  // <Wrapper>
    <LoginCard>
      <Logo />
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
    </LoginCard>
  // </Wrapper>
  );
};

LoginSide.propTypes = {
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
  withRouter,
  connect(mapStateToProps, { ...actions, change }),
  reduxForm({ form: 'signup' }),
)(LoginSide);
