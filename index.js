const _ = require('lodash');
const compare = require('./speedtest');

const add = require('./add');

const swissknife = {
  add
}

compare(swissknife.add, _.add, 2);