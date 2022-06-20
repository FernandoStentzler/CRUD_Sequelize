const Sequelize = require('sequelize');
const {Album, Artista} = require('../models');
const Op = Sequelize.Op;
const artistaController = {
    home: async (req,res) => {
        let {page=1} = req.query
        let {count:total, rows:artistas} = await Artista.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10
        });
        let totalPagina = Math.ceil(total/10)
        res.render('artistas',{artistas, totalPagina});
    },
    show: async (req,res) => {
        const {id} = req.params;
        const artista = await Artista.findByPk(id, {
            include: {
                model: Album,
                as: 'albuns',
                required: true,
            }
        });
        res.render('artistasAlbuns',{artista});
}

}

module.exports = artistaController;