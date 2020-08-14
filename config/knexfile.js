'use strict';

require('dotenv').config({ path: require('path').join(__dirname, "../.env") });

const config = require('./');

module.exports = config.get('db');
