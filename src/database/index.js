const Sequelize = require('sequelize');
const dbConfig = require("../config/database")

const Recepcionista = require('../models/Recepcionista')
const Hospede = require('../models/Hospede')  
const Reserva = require('../models/Reserva')
const Quarto = require('../models/Quarto')

const connection = new Sequelize(dbConfig);

Recepcionista.init(connection)
Hospede.init(connection) 
Reserva.init(connection) 
/*
Reserva.associate(connection.models)
*/ 
Quarto.init(connection) 

module.exports = connection;