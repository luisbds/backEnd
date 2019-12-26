const {Model, DataTypes} = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        },{
            sequelize

        })
    }
    static associate(models){
        this.hasMany(models.Endereco, {
            foreignKey: 'user_id',
            as: "enderecos"})
        this.belongsToMany(models.Tecnologia, {
            foreignKey:"user_id",
            through: "user_techs",
            as: "tecnologia"
        })
    }
}

module.exports = User;