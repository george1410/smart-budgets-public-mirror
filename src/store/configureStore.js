import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import statusReducer from '../reducers/statusReducer';
import transactionsReducer from '../reducers/transactionsReducer';
import filtersReducer from '../reducers/filtersReducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => createStore(
  combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    status: statusReducer,
    transactions: transactionsReducer,
    filters: filtersReducer,
  }),
  composeEnhancers(applyMiddleware(reduxThunk)),
);
