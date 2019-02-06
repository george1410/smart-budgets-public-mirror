import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const LoginWrapper = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 5rem;
  ${media.phone`
    width: 100vw;
    height: 100vh;  
    padding: 4rem;
  `}
`;

const Title = styled.h1`
  font-size: 6rem;
  padding: 0 1rem;
  margin-top: 0;
  ${media.phone`
    font-size: 5rem;
  `}

  &:last-of-type {
    margin-top: -6rem;
    border-bottom: 5px solid #000;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    ${media.phone`
      margin-top: -5rem;
    `}
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #555;
  margin-bottom: 4rem;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${media.phone`
    font-size: 5rem;
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  outline: none;
  background: #fff;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: 2px;
  transition: all 0.3s ease-out;

  &:focus {
    border-bottom: 3px solid blue;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  font-size: 1.8rem;
  color: #fff;
  background-color: rgba(30, 30, 255, 1);
  border: none;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 4px 0 rgba(30, 30, 255, 0.8), 0 4px 0 rgba(0, 0, 0, 1);

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { logIn } = this.props;
    logIn();
  }

  render() {
    return (
      <Wrapper>
        <LoginWrapper>
          <Title>Smart</Title>
          <Title>Budgets</Title>
          <Subtitle>Please log in to get started.</Subtitle>
          <Form onSubmit={this.onSubmit}>
            <Input placeholder="User ID" />
            <Input placeholder="Password" type="password" />
            <Button type="submit">
          Log In
            </Button>
          </Form>
        </LoginWrapper>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(login(123)),
});

LoginPage.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
