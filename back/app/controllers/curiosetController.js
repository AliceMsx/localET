const Curioset = require('../models/curioset');

const curiosetController = {

    // Route GET /
    allCuriosets: async (req, res) => {

        const Curiosets = await Curioset.findAll();

        res.json(Curiosets);
    }
    
}

module.exports = curiosetController;