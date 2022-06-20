var express = require('express');
var router = express.Router();
const artistasController = require('../controllers/artistasController')

// Listar Albuns
router.get('/', artistasController.home)
router.get('/:id/albuns', artistasController.show)

module.exports = router;