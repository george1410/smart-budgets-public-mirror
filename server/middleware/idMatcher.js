const jwt = require('jsonwebtoken');
const config = require('../config');

const idMatcher = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const idOnToken = jwt.verify(token, config.secret).sub;
    if (idOnToken === parseInt(req.params.id, 10)) {
      next();
    } else {
      res.send({ error: 'token does not match id on route' });
    }
  } catch (err) {
    res.send('unauthorized');
  }
};

module.exports = idMatcher;
