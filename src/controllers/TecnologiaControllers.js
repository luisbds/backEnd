const Tecnologia = require('../models/tecnologias')
const User = require('../models/users')

module.exports = {
    async adicionar(req, res){
        const {user_id} = req.params;
        const {nome} = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({
                erro:"Usuario não existe"})
        }

        const [tech, created] = await Tecnologia.findOrCreate({
            where : {nome}
        }) 

        await user.addTecnologia(tech)

        return res.json(tech)
    },

    async delete(req, res){
        const {user_id} = req.params;
        const {nome} = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({
                erro:"Usuario não existe"})
        }

        const tech = await Tecnologia.findOne({
            where : {nome}
        }) 
        console.log(tech)
        await user.removeTecnologia(tech)

        return res.json({mensagem: "removida"})
    }
}