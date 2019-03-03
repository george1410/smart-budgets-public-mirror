const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const bCrypt = require('bcrypt-nodejs');
const models = require('../models');
const config = require('../config');

const User = models.user;

// create local strategy
const localLogin = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    const isValidPassword = (userpass, p) => (
      bCrypt.compareSync(p, userpass)
    );

    User.findOne({
      where: {
        email,
      },
    }).then((user) => {
      if (!user) {
        return done(null, false, {
          message: 'Email does not exist',
        });
      }
      if (!isValidPassword(user.password, password)) {
        return done(null, false, {
          message: 'Incorrect password',
        });
      }
      const userinfo = user.get();
      return done(null, userinfo);
    }).catch((err) => {
      console.log('Error:', err);
      return done(null, false, {
        message: 'Something went wrong with your signin',
      });
    });
  },
);

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  // see if the user id in the payload exists in our database.
  // if it does, call done with that object.
  // else, call done without a user object.
  try {
    User.findOne({
      where: {
        userId: payload.sub,
      },
    }).then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  } catch (err) {
    done(err);
  }
});

// tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
