const { Model, DataTypes } = require('sequelize')

class Reserva extends Model {
    static init(sequelize) {
        super.init({
            valor: DataTypes.FLOAT,
            data_Entrada: DataTypes.DATE,
            data_Saida: DataTypes.DATE,
        }, { 
            sequelize,
            tableName: 'reserva', 
        })
    }
    /*
    static associate(models) { 
        this.belongsTo(models.Hospede, { foreignKey: 'user_id', as: 'user_hospede'})
    }
    */
}

module.exports = Reserva 