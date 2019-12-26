const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserControlers")
const EnderecoController = require("./controllers/EnderecoControlers")
const TecnologiaController = require("./controllers/TecnologiaControllers")

routes.get('/',(req, res) =>{
    res.send("Olá Turma");
})

routes.post('/users', UserController.InserirUsuario);
routes.get('/users', UserController.ListarUsuarios);

routes.get('/users/:id', UserController.GetUsuarioId);

routes.post('/endereco/:user_id', EnderecoController.adicionarEndereco)
routes.get('/endereco/:user_id', EnderecoController.buscarEndereco)

routes.post('/users/:user_id/techs', TecnologiaController.adicionar)

routes.delete('/users/:user_id/techs', TecnologiaController.delete)

module.exports = routes