const express = require('express');
const {index,search} = require('../controllers/mainController');
const router = express.Router();

router.get('/',index);
router.get('/search',search)
module.exports = router