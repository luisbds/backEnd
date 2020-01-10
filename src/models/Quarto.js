const { Model, DataTypes } = require('sequelize')

class Quarto extends Model {
    static init(sequelize) {
        super.init({
            quantidade_cama: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'quarto',
        })
    }
}

module.exports = Quarto 