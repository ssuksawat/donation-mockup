const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

module.exports = (app, config) => {
  app.use(morgan(config.logLevel));
  app.use(compression());
  app.use(express.static(`${config.rootPath}/public`));
};
