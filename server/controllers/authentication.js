const jwt = require('jsonwebtoken');
const config = require('../config');

const tokenForUser = (user) => {
  const iat = new Date().getTime();
  return jwt.sign({ sub: user.id, iat }, config.secret);
};

exports.signin = (req, res) => {
  // user has already had their email and password authenticated
  // we need to give them a token
  res.send({ token: tokenForUser(req.user), uid: req.user.userId });
};
