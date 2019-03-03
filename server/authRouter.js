const passport = require('passport');
const Authentication = require('./controllers/authentication');
require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.get('/api/*', requireAuth);
  app.post('/auth/signin', requireSignin, Authentication.signin);
};
