import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import categoriesReducer from '../reducers/categoriesReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => createStore(
  combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
  }),
  composeEnhancers(applyMiddleware(reduxThunk)),
);
