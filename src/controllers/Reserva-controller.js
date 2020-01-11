const Reserva = require('../models/Reserva')
/*
const Hospede = require('../models/Hospede')
*/
module.exports = {
    async store(req, res) {
        /*
        const { user_id } = req.params
        */
        const { valor, data_Entrada, data_Saida } = req.body
        /*
        const hospede = await Hospede.findByPk(user_id) 
        
        if(!hospede) {
            return res.status(400).json({ error: 'User not found' }) 
        }
        */

        const reserva = await Reserva.create({ 
            valor,
            data_Entrada,
            data_Saida
            /*
            user_id,
            */
        }) 

        return res.json(reserva) 
    } 
}