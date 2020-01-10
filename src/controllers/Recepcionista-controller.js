const Recep = require('../models/Recepcionista')

module.exports = {
    async store(req, res) {
        const { name, email } = req.body

        const recep = await Recep.create({ name, email })

        return res.json(recep) 
    }
}