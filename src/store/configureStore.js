import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import counterReducer from '../reducers/counterReducer';
import answerReducer from '../reducers/answerReduced';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => createStore(
  combineReducers({
    counter: counterReducer,
    answer: answerReducer,
  }),
  composeEnhancers(applyMiddleware(reduxThunk)),
);
