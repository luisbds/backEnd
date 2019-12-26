const Endereco = require('../models/endereco')
const User = require('../models/users')

module.exports = {
    async adicionarEndereco(req, res){
        const {cep, rua, numero} = req.body;
        const {user_id} = req.params;
        console.log(user_id)
        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({
                erro:"Usuario não existe"})
        }
        const endereco = await Endereco.create({
            cep,
            rua,
            numero,
            user_id
        })
        return res.json(endereco)
    },
    async buscarEndereco(req, res){
        const {user_id} = req.params;
        const user = await User.findByPk(user_id, {
            include: {association: 'enderecos'}
        });
        return res.json(user)
        /*if(!user){
            return res.status(400).json({
                erro:"Usuario não existe"})
        }*/

        //const endereco = await Endereco.findAll({where: {user_id}});

        
    }
}