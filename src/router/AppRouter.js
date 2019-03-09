import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/LoginPage/LoginPage';
import NotFound from '../components/NotFoundPage/NotFoundPage';
import Home from '../components/Home/Home';
import Settings from '../components/Settings/Settings';
import Feed from '../components/Feed/Feed';
import Budgets from '../components/Budgets/Budgets';
import ConnectedPrivateRoute from './PrivateRoute';
import ConnectedPublicRoute from './PublicRoute';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <ConnectedPublicRoute exact path="/" component={Login} />
      <ConnectedPrivateRoute exact path="/home" component={Home} />
      <ConnectedPrivateRoute exact path="/budgets" component={Budgets} />
      <ConnectedPrivateRoute exact path="/feed" component={Feed} />
      <ConnectedPrivateRoute exact path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
