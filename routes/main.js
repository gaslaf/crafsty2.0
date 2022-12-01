const express = require('express');
const multer = require('multer');
const upload  = require('../middlewares/imageBannerStorage');
const {index,search,admin, addBanner, allBanner, storeBanner} = require('../controllers/mainController');
const adminUserCheck = require('../middlewares/adminUserCheck');
const router = express.Router();


router.get('/',index);
router.get('/search',search);
router.get('/admin',adminUserCheck,admin);

router.get('/admin/banner/add',adminUserCheck,addBanner);
router.post('/admin/banner/add',upload.single('image'),storeBanner)

router.get('/admin/banner/all',adminUserCheck,allBanner);

module.exports = router