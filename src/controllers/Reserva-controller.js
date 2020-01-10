const Reserva = require('../model/Reserva')

module.exports = {
    async store(req, res) {
        const { valor, data_Entrada, data_Saida } = req.body

        const reserva = await Reserva.create({ valor, data_Entrada, data_Saida }) 

        return res.json(reserva) 
    }
}