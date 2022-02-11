var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');

/* GET home page. */

router.get('/menu', indexController.menu);
router.get('/plato/:id?', indexController.plato);

module.exports = router;
