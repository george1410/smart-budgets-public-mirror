import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import counterReducer from '../reducers/counterReducer';
import answerReducer from '../reducers/answerReducer';
import authReducer from '../reducers/authReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => createStore(
  combineReducers({
    counter: counterReducer,
    answer: answerReducer,
    auth: authReducer,
  }),
  composeEnhancers(applyMiddleware(reduxThunk)),
);
