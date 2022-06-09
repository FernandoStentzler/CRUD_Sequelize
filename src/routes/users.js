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

// Update
router.get('/editar/:id', userController.edit)
router.put('/editar/:id', userController.update)

// Delete
router.delete('/delete/:id', userController.destroy)


module.exports = router;
