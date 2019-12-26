const {Model, DataTypes} = require('sequelize')

class Tecnologia extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
        },{
            sequelize,
            tableName: "tecnologia"
        })
    }
    static associate(models){
        this.belongsToMany(models.User, {
            foreignKey: 'tec_id',
            through: "user_techs",
            as: "usuarios"})
    }
}

module.exports = Tecnologia;