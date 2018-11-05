const express = require('express');
const postsController = require('../controllers/postsController');
const viewController = require('../controllers/viewController');


//route handler creation
const Routes = express.Router();

//once get is called run index (middleware) method on postsController and showPosts method on viewController
Routes.route('/').get(postsController.index, viewController.showPosts);

module.exports = Routes;