const express = require('express');
const jsonBodyParser = express.json();
const humanRouter = express.Router();
const humansService = require('./humans-service');
let { humanQueue } = require('./humans-service');

humanRouter
  .route('/')
  .get((req, res, next) => {
    let currHuman = humansService.humanPeek();
    res.status(200).json(currHuman);
  })
  .post(jsonBodyParser, (req, res, next) => {
    let name = req.body.name;
    humanQueue.enqueue(name);
    res.status.json(204);
  })
  .delete((req, res) => {
    humanService.humanDequeque();
    return res.status(200).json();
  });

module.exports = humanRouter;
