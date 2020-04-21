const express = require('express');
const server = express();

const db = require('./data/db-config')

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>What should we do today?</h2>`);
});

module.exports = server;