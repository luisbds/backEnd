const { Model, DataTypes } = require('sequelize')

class Recepcionista extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Recepcionista 