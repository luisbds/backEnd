const express = require("express");
const RecepController = require('./controllers/Recepcionista-controller.js')
const HospeController = require('./controllers/Hospede-controller.js')
const ReservaController = require('./controllers/Reserva-controller.js')
const QuartoController = require('./controllers/Quarto-controller.js')

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá Turma') 
})

routes.post('/recepcionista', RecepController.store) 
routes.post('/hospede', HospeController.store)
/*
routes.post('/hospede/:user_id/reserva', ReservaController.store)
*/
routes.post('/reserva', ReservaController.store)
routes.post('/quarto', QuartoController.store) 

module.exports = routes