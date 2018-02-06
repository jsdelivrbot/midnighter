/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = process.env.PORT || app.get('port');
const host = process.env.HOST || app.get('host')
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http(s?)://%s:%d', host, port)
);
