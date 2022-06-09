const { Usuario,} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt')

const userController = {
    home: async (req,res) => {
        let {page=1} = req.query
        let {count:total, rows:users} = await Usuario.findAndCountAll({
            limit: 6,
            offset: (page - 1) * 6
        })
        let totalPagina = Math.round(total/5)        
        res.render('usuarios', {users, totalPagina})
        
    },

    creat:(req,res)=>{
        return res.render('cadastroUsuario')
    },

    store: async (req,res) => {
        const { nome , email , senha} = req.body
        let criptografada = bcrypt.hashSync(senha, 10)

        await Usuario.create({
            nome,
            email,
            senha:criptografada
        })

        return res.redirect('/users')
    },

    edit: async (req,res) => {
        const id = req.params.id;

        const user = await Usuario.findByPk(id)

        return res.render('editarUsuario', {user})
    },

    update: async (req,res) =>{
        const id = req.params.id
        const {nome , email , senha} = req.body;
        let criptografada = bcrypt.hashSync(senha, 10)

        await Usuario.update({
            nome,
            email,
            senha:criptografada
        },
        {
            where:{
                id_usuario:id
            }
        })

        
        return res.redirect('/users')
    },

    destroy: async (req,res)=>{
        let id = req.params.id

        const resultado = await Usuario.destroy({
            where:{
                id_usuario:id
            }
        })

        res.redirect('/users')
    },

    findOne: async (req,res) => {
        let id = req.params.id
        let user = await Usuario.findOne({
            where:{
                id_usuario: id
            }
        })
        
        return res.render('viewUsuario' , {user})

    },
    findByPk: async (req,res) => {
        let id = req.params.id
        let users = await Usuario.findByPk(id)

        console.log(users)
    },

    search: async (req,res) => {
        let key = req.query.key

        let users = await Usuario.findAll({
            where:{
                nome:{
                    [Op.like]:`%${key}%`
                }
            },
            order:[
                ['id_usuario', 'ASC']
            ]
        })
        
        res.render('usuarios', {users:users})
    },
    bulkCreat: async (req,res) => {
        const listaDeUsuarios = [
            {nome: 'Teste 1', email:'teste1@email.com', senha:'senhateste1'},
            {nome: 'Teste 2', email:'teste2@email.com', senha:'senhateste2'},
            {nome: 'Teste 3', email:'teste3@email.com', senha:'senhateste3'}
        ]
        const resultado = await Usuario.bulkCreat(listaDeUsuarios)
    }
}

module.exports = userController