const express = require('./express');
//const jsonBodyParser = express.json();
const petsRouter = express.Router();
const petsService = require('./pets-service');

petsRouter.route('/dog').get((req, res) => {});
