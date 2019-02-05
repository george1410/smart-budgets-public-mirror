import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Counter from '../Counter/Counter';
import YesNoMaybe from '../YesNoMaybe/YesNoMaybe';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: salmon;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Img = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 10vmin;
`;

const A = styled(Link)`
  color: #000;
  margin-bottom: 2rem;
`;

class App extends React.Component {
  state ={ username: null }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <Wrapper>
        <Header>
          <Img src={logo} alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
and save to reload.
          </p>
          {username ? (
            <h4>{`Hello ${username}`}</h4>
          ) : (
            <h1>Loading.. please wait!</h1>
          )}
          <A
            to="/asd"
          >
            Front end routing
          </A>
          <Counter />
          <YesNoMaybe />
        </Header>
      </Wrapper>
    );
  }
}

export default App;
