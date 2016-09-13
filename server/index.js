const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/middleware')(app, config);
require('./config/routes')(app, config);

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
