const persona = require('express').Router();
const all = require('./all');
const username = require('./username');

persona.get('/people', all);
persona.get('/search/:username', username);

module.exports = persona;
