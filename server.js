const next = require('next');
const routes = require('./src/javascripts/routes/routes');
const app = next({
  dev: process.env.NODE_ENV !== 'production'
});
const handler = routes.getRequestHandler(app);
const { createServer } = require('http');
const port = process.env.PORT || 8080;

let iparr =
  process.env.NODE_ENV == 'production'
    ? process.env.SSH_CONNECTION.split(' ')
    : null;
const ip = process.env.NODE_ENV == 'production' ? iparr[2] : 'localhost';

app.prepare().then(() => {
  createServer(handler).listen(port, ip);
});
