const express = require('express');
//const jsonBodyParser = express.json();
const petsRouter = express.Router();
const petsService = require('./pets-service');

petsRouter.route('/dogs').get((req, res) => {
  let dog = petsService.dogAdopt();
  petsService.dogDequeque();
  return res.status(200).json(dog);
});
petsRouter.route('/cats').get((req, res) => {
  let cat = petsService.catAdopt();
  petsService.catDequeque();
  return res.status(200).json(cat);
});
module.exports = petsRouter;
