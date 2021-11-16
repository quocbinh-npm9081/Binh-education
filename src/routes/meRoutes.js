const express = require('express');
const Router = express.Router();
const meController = require('../app/controllers/meController');

Router.get('/stored/courses', meController.StoredCouses);

module.exports = Router