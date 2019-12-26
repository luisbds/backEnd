const Sequelize = require('sequelize');
const dbConfig = require("../config/database")
const User = require("../models/users")
const Endereco = require("../models/endereco")
const Tecnologia = require("../models/tecnologias")


const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);
Tecnologia.init(connection);

User.associate(connection.models)
Endereco.associate(connection.models);
Tecnologia.associate(connection.models);

module.exports = connection;