import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  increment, decrement, reset, set,
} from '../../actions/counter';

const Wrapper = styled.div`
  border: 1px solid black;
  width: 80vw;
  height: 40vh;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCount: 0,
    };
  }

  onChange = (e) => {
    const newCount = e.target.value;
    this.setState(() => ({
      newCount,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.set(this.state.newCount);
  };

  render() {
    return (
      <Wrapper>
        <p>Redux Demo</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.incrementByFive}>Increment by 5</button>
        <p>{this.props.count}</p>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.decrementByFive}>Decrement by 5</button>
        <button onClick={this.props.reset}>Reset</button>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            placeholder="count"
            value={this.state.newCount}
            onChange={this.onChange}
            autoFocus
          />
          <button>Update Count</button>
        </form>
      </Wrapper>
    );
  }
}

// this maps the state object directly to props so that it can be accessed with props.state
// if the Component does not need access to the full state it is better to use something like
// count: state.count which gives only the access to the count
const mapStateToProps = state => ({
  count: state.counter.count,
});

// this maps the actions to our dashboard component's props
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  incrementByFive: () => dispatch(increment(5)),
  decrement: () => dispatch(decrement()),
  decrementByFive: () => dispatch(decrement(5)),
  reset: () => dispatch(reset()),
  set: newCount => dispatch(set(newCount)),
});

// connect returns a higher order component to which we pass our dashboard component.
//
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
