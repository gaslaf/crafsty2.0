const express = require('express');
const router = express.Router();


const {add,store} = require('../controllers/productsControllers')

router.get('/add',add);
router.post('/add',store);

module.exports = router