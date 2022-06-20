var express = require('express');
var router = express.Router();
const pedidosController = require('../controllers/pedidosController')

// Listar Albuns
router.get('/', pedidosController.home)
router.get('/detalhe/:id', pedidosController.show)

module.exports = router;