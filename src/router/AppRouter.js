import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Login from '../components/LoginPage/LoginPage';
import NotFound from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
