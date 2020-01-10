const Hospede = require('../models/Hospede') 

module.exports = {
    async store(req, res) {
        const { name, email } = req.body

        const hospe = await Hospede.create({ name, email })

        return res.json(hospe) 
    }
}