const { Model, DataTypes } = require('sequelize')

class Hospede extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'hospede',
        })
    }
}

module.exports = Hospede 