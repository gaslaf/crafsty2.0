const express = require('express');
const router = express.Router();


const {add} = require('../controllers/productsControllers/add')

router.get('/add',add);

module.exports = router