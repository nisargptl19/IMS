var express = require('express');
var router = express.Router();
let controller = require('../controller/controller');

router.post('/signup', (req, res) => {

});

router.get('/login', (req, res) => {
    controller.getAllCats(req, res);
});

router.get('/getproducts', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/getproducts', (req, res) => {
    controller.remove(req, res);
});

module.exports = router;