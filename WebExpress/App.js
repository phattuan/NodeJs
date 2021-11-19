const express = require('express');
const fun = require('../WebExpress/Page-1')
const main = express();
main.get('/pa', fun.ca).listen(3333);
