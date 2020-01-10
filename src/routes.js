const express = require("express");
const RecepController = require('./controllers/Recepcionista-controller.js')

const routes = express.Router();

routes.post('/recepcionista', RecepController.store) 

module.exports = routes