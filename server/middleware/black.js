module.exports = function (options = {}) {
  return function black(req, res, next) {
    console.log('black middleware is running');
    next();
  };
};
