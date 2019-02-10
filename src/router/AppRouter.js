import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/LoginPage/LoginPage';
import NotFound from '../components/NotFoundPage/NotFoundPage';
import Social from '../components/Social/Social';
import Settings from '../components/Settings/Settings';
import Feed from '../components/Feed/Feed';
import Overview from '../components/Overview/Overview';
import ConnectedPrivateRoute from './PrivateRoute';
import ConnectedPublicRoute from './PublicRoute';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <ConnectedPublicRoute exact path="/" component={Login} />
      <ConnectedPrivateRoute exact path="/social" component={Social} />
      <ConnectedPrivateRoute exact path="/settings" component={Settings} />
      <ConnectedPrivateRoute exact path="/feed" component={Feed} />
      <ConnectedPrivateRoute exact path="/overview" component={Overview} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
