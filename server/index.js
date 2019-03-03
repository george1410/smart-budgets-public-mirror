const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter');
const authRouter = require('./authRouter');
const idMatcher = require('./middleware/idMatcher');


const app = express();
app.use(bodyParser.json({ type: '*/*' }));

app.use('/api/users/:id', idMatcher);

app.use(express.static(path.join(__dirname, '..', 'build')));

// Auth Routing
authRouter(app);

// API Routing
apiRouter(app);


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
