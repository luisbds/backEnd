const Sequelize = require('sequelize');
const dbConfig = require("../config/database")

const Recepcionista = require('../model/Recepcionista') 

const connection = new Sequelize(dbConfig);

Recepcionista.init(connection) 

module.exports = connection;