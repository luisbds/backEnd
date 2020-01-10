const { Model, DataTypes } = require('sequelize')

class Reserva extends Model {
    static init(sequelize) {
        super.init({
            valor: DataTypes.FLOAT,
            data_Entrada: DataTypes.DATE,
            data_Saida: DataTypes.DATE,
        }, { 
            sequelize 
        })
    }
}

module.exports = Reserva 