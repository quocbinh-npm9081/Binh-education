const express = require('express');
const Router = express.Router();
const NewController = require('../app/controllers/NewController');

Router.use('/', NewController.index);

module.exports = Router