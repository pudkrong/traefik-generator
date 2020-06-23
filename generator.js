'use strict';

const handlebars = require('handlebars');
const fs = require('fs');

const template = handlebars.compile(fs.readFileSync('./local.handlebars', 'utf8'));

const data = {
  servers: ['01', '02', '03', '04', '05', '06', '07', '08', '12']
};

fs.writeFileSync('./local.yml', template(data));