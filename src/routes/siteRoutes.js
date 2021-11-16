const express = require('express');
const Router = express.Router();
const SiteController = require('../app/controllers/SiteController');

Router.use('/search', SiteController.search);
Router.use('/', SiteController.index);



module.exports = Router;