const passport = require('passport');
const Authentication = require('./controllers/authentication');
require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // 'server-dev' command sets this env var
  // this makes writing and testing endpoints easier as you
  // dont need to have a jwt set.
  if (!process.env.NO_JWT) {
    app.get('/api/*', requireAuth);
  }
  app.post('/auth/signin', requireSignin, Authentication.signin);
};
