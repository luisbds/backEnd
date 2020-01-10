const Quarto = require('../models/Quarto') 

module.exports = {
    async store(req, res) {
        const { quantidade_cama } = req.body

        const quarto = await Quarto.create({ quantidade_cama })

        return res.json(quarto) 
    }
}