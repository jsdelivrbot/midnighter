const black = require('./black');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/penny-black', black());
};
