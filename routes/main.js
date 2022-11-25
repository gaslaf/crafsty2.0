const express = require('express');
const multer = require('multer');
const upload  = require('../middlewares/imageBannerStorage');
const {index,search,admin, addBanner, allBanner, storeBanner} = require('../controllers/mainController');
const router = express.Router();


router.get('/',index);
router.get('/search',search);
router.get('/admin',admin);

router.get('/admin/banner/add',addBanner);
router.post('/admin/banner/add',upload.single('image'),storeBanner)

router.get('/admin/banner/all',allBanner);

module.exports = router