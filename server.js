'use strict';

const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

require('dotenv').config();  // load the environment variables from .env

const app = express();

app.use(history()); // To get the SPA router to work

// For security reasons, don't send info on server to client
app.disable('x-powered-by');

app.set('port', process.env.PORT);

// Run static files out of pubic directories in view & view-model on client
app.use('/',express.static(path.join(__dirname,'client/view/public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/build', express.static(path.join(__dirname, 'build')));

// The one route for the SPA
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/client/view/public/index.html'));
});

// Start server listening for requests from browser
app.listen(app.get('port'), () => {
  console.log( ' Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


