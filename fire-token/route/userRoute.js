const express = require('express');
const route = express.Router();
const controller = require('../controller/userController');
const authMiddleware = require('../middleware/firebaseAuth');



route.get('/', controller.getAllusers);
route.post('/login', authMiddleware.checkIfAuthenticated, controller.login);



module.exports = route;

