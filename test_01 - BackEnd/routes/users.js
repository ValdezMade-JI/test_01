var express = require('express');
var router = express.Router();
var userCtrl = require('../controller/userController');

/* GET users */
router.get('/', userCtrl.get);

/* GET user by id */
router.get('/:id', userCtrl.getById);

/*POST create user */
router.post('/', userCtrl.create);

/*POST update user */
router.post('/:id', userCtrl.update);

/*DELETE delete user */
router.delete('/:id', userCtrl.delete);


module.exports = router;
