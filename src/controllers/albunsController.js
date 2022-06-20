const Sequelize = require('sequelize');
const {Album, Artista} = require('../models');
const Op = Sequelize.Op;
const albunsController = {
    home: async (req,res) => {
        let {page=1} = req.query
        let {count:total, rows:albuns} = await Album.findAndCountAll({
            include: {
                model: Artista,
                as: 'artista',
                required: true,
            },   
            limit: 10,
            offset: (page - 1) * 10                         
        });
        let totalPagina = Math.ceil(total/10)
        res.render('albuns',{albuns, totalPagina});
    },
    show: async (req,res) => {
        const {id} = req.params;
        const album = await Album.findByPk(id, {
            include: {
                model: Artista,
                as: 'artista',
                required: true,
            }
        });
        res.render('albunsArtistas',{album});
    }
}

module.exports = albunsController;