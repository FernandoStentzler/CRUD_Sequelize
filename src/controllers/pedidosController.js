const Sequelize = require('sequelize');
const {Pedido, Produto, Usuario} = require('../models');
const Op = Sequelize.Op;
const pedidosController = {
    home: async (req,res) => {
        let {page=1} = req.query
        let {count:total, rows:pedido} = await Pedido.findAndCountAll({
            include:{
                model: Usuario,
                as: 'usuario',
                required: true
            },
            limit: 10,
            offset: (page - 1) * 10,                            
        });

        let totalPagina = Math.ceil(total/10)
        res.render('pedidos',{pedido, totalPagina});
    },
    show: async (req,res) => {
        const {id} = req.params;
        const pedido = await Pedido.findOne({
            where:{
                id_pedido:id
            },
            include: {
                model: Produto,
                as: 'itensPedido',
                required: true,
            }
        });
        res.render('pedidosDetalhes',{pedido});
}

}

module.exports = pedidosController;