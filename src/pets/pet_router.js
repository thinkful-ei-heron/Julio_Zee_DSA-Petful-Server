const express = require('./express');
const jsonBodyParser = express.json();
const petsRouter = express.Router();

petsRouter.route('/dog').get((req, res, next) => {
  const dog = req.app.get('');
});
