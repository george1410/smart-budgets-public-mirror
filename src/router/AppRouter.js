import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import App from '../components/App/App';
import NotFound from '../components/NotFoundPage/NotFoundPage';
import Social from '../components/Social/Social';
import Settings from '../components/Settings/Settings';
import Feed from '../components/Feed/Feed';
import Overview from '../components/Overview/Overview';

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Social" component={Social} />
      <Route exact path="/Settings" component={Settings} />
      <Route exact path="/Feed" component={Feed} />
      <Route exact path="/Overview" component={Overview} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
