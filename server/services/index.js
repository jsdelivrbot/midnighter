const users = require('./users/users.service.js');
const logs = require('./logs/logs.service.js');
const notes = require('./notes/notes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(logs);
  app.configure(notes);
};
