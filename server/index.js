const express = require('express');
const path = require('path');
const router = require('./router');


const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

// API Routing
router(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
