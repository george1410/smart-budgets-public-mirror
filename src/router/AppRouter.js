import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import App from '../components/App/App';
import Overview from '../components/Overview/Overview';
import Feed from '../components/Feed/Feed';
import Social from '../components/Social/Social';
import Settings from '../components/Settings/Settings';
import NotFound from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
      <Route path="/overview" component={Overview} />
      <Route path="/feed" component={Feed} />
      <Route path="/social" component={Social} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
