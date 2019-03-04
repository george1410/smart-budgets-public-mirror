import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../reducers/authReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import statusReducer from '../reducers/statusReducer';
import transactionsReducer from '../reducers/transactionsReducer';
import filtersReducer from '../reducers/filtersReducer';
import userReducer from '../reducers/userReducer';
import { DEAUTHENTICATE } from '../actions/types';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  categories: categoriesReducer,
  status: statusReducer,
  transactions: transactionsReducer,
  filters: filtersReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === DEAUTHENTICATE) {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
