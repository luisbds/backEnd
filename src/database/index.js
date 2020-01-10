const Sequelize = require('sequelize');
const dbConfig = require("../config/database")

const Recepcionista = require('../model/Recepcionista')
const Hospede = require('../model/Hospede')  
const Reserva = require('./model/Reserva')

const connection = new Sequelize(dbConfig);

Recepcionista.init(connection)
Hospede.init(connection) 
Reserva.init(connection)  

module.exports = connection;