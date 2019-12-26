const User = require('../models/users');

module.exports = {
    async InserirUsuario(req, res){
        const {nome, email} = req.body;
        console.log({nome, email})
        const user = await User.create({nome, email});

        return res.json(user);
    },

    async ListarUsuarios(req, res){
        const listaUsuarios = await User.findAll();
        return res.json(listaUsuarios)
    },

    async GetUsuarioId(req,res){
        const {id} = req.params;
        const user = await User.findByPk(id);
        if(!user)
            return res.status(400).json({erro: "Usuario não encontrado"});
        
        return res.json(user)
    }

}