/* eslint-disable no-console */

const routesTCC = require('./routes/TccRoutes.js');

const e = require('express');

const express = e();

express.use('/', routesTCC);

express.listen(8080);
