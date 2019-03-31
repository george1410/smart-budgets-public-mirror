import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import configureStore from './store/configureStore';
import { GlobalStyle, theme } from './style';
import AppRouter from './router/AppRouter';
import 'sanitize.css/sanitize.css';
import * as serviceWorker from './serviceWorker';
import { startSetCategories } from './actions/categories';
import { startSetUserInfo } from './actions/user';
import { FadingBackground } from './components/FriendModal/FriendModal';

// creates the store which holds the app's global state.
const store = configureStore();

const jsx = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ModalProvider backgroundComponent={FadingBackground}>
        <GlobalStyle />
        <AppRouter />
      </ModalProvider>
    </Provider>
  </ThemeProvider>
);

// if the user has their uid and jwt set from the last session,
// then just fetch their data.
if (store.getState().auth.uid) {
  store.dispatch(startSetCategories());
  store.dispatch(startSetUserInfo());
}

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
