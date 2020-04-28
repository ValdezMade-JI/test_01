var express = require('express');
var router = express.Router();
var categoryCtrl = require('../controller/categoryController');

/* GET categories */
router.get('/', categoryCtrl.get);

/* GET category by id */
router.get('/:id', categoryCtrl.getById);

/*POST create category */
router.post('/', categoryCtrl.create);

/*POST update category */
router.post('/:id', categoryCtrl.update);

/*DELETE delete category */
router.delete('/:id', categoryCtrl.delete);

module.exports = router;

