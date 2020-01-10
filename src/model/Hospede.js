const { Model, DataTypes } = require('sequelize')

class Hospede extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        }, {TableName:'hospede'})
    }
}

module.exports = Hospede 