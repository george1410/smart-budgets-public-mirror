import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  startFetchAnswer,
} from '../../actions/answer';

const Wrapper = styled.div`
  border: 1px solid black;
  width: 80vw;
  height: 25vh;
`;

const YesNoMaybe = ({
  isLoading, hasErrored, answer, fetchAnswer,
}) => {
  if (isLoading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (hasErrored) {
    return (
      <Wrapper>
        <p>ERROR</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <p>Async updates to redux store</p>
      {
        answer
      }
      <button
        type="button"
        onClick={fetchAnswer}
      >
        Fetch Answer
      </button>
    </Wrapper>
  );
};

YesNoMaybe.defaultProps = {
  isLoading: false,
  hasErrored: false,
  answer: '',
  fetchAnswer: startFetchAnswer,
};

YesNoMaybe.propTypes = {
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.bool,
  answer: PropTypes.string,
  fetchAnswer: PropTypes.func,
};

const mapStateToProps = state => ({
  hasErrored: state.answer.hasErrored,
  isLoading: state.answer.isLoading,
  answer: state.answer.answer,
});

const mapDispatchToProps = dispatch => ({
  fetchAnswer: () => dispatch(startFetchAnswer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(YesNoMaybe);
