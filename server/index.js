const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter');
const authRouter = require('./authRouter');
const idMatcher = require('./middleware/idMatcher');
const budgetCalculator = require('./budgetCalculator');

const app = express();
app.use(bodyParser.json({ type: '*/*' }));

// 'server-dev' command sets this env var
// this makes writing and testing endpoints easier as you
// dont need to have a jwt set.
if (!process.env.NO_JWT) {
  app.use('/api/users/:id', idMatcher);
}

app.use(express.static(path.join(__dirname, '..', 'build')));

budgetCalculator();

// Auth Routing
authRouter(app);

// API Routing
apiRouter(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
