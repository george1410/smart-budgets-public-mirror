import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './store/configureStore';
import { GlobalStyle, theme } from './style';
import AppRouter from './router/AppRouter';
import 'sanitize.css/sanitize.css';
import * as serviceWorker from './serviceWorker';
import { startSetCategories } from './actions/categories';
import { startSetTransactions } from './actions/transactions';

// creates the store which holds the app's global state.
const store = configureStore();

const jsx = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </ThemeProvider>
);

// TODO remove
// log store for debugging
store.subscribe(() => console.log(store.getState()));
store.dispatch(startSetCategories());
store.dispatch(startSetTransactions());

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
