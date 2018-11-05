const express = require('express');
const aboutMeController = require('../controllers/aboutMeController');

//route handler creation
const Routes = express();


//once get is run...run index middleware on aboutMeController
Routes.route('/').get(aboutMeController.index);

module.exports = Routes;
