const express = require('express');
//const jsonBodyParser = express.json();
const petsRouter = express.Router();
const petsService = require('./pets-service');

petsRouter
  .route('/dogs')
  .get((req, res) => {
    let dog = petsService.dogPeek();
    return res.status(200).json(dog);
  })
  .delete((req, res) => {
    let dog = petsService.dogAdopt();
    return res.status(204).json(dog);
  });
petsRouter
  .route('/cats')
  .get((req, res) => {
    let cat = petsService.catPeek();
    return res.status(200).json(cat);
  })
  .delete((req, res) => {
    let cat = petsService.catAdopt();
    return res.status(204).json(cat);
  });

petsRouter.route('/all').get((req, res) => {
  let all = petsService.sendAllAnimals();
  return res.status(200).json(all);
});
module.exports = petsRouter;
