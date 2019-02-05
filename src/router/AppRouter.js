import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import App from '../components/App/App';
import NotFound from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
