var express = require('express');
var router = express.Router();
const albunsController = require('../controllers/albunsController')

// Listar Albuns
router.get('/', albunsController.home)
router.get('/:id', albunsController.show)

module.exports = router;