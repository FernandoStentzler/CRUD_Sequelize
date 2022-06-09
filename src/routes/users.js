var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.home)

// FindByPk
router.get('/findByPk/:id', userController.findByPk)

// findOne
router.get('/find/:id', userController.findOne)

// search
router.get('/search', userController.search)

// Creat
router.get('/creat', userController.creat)
router.post('/creat', userController.store)


module.exports = router;
