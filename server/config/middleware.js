const express = require('express');
const morgan = require('morgan');

module.exports = (app, config) => {
  app.use(morgan(config.logLevel));
  app.use(express.static(`${config.rootPath}/public`));
};
