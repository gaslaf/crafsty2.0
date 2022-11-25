const express = require('express');
const router = express.Router();
const upload  = require('../middlewares/imageProductStorage');
const {add,store,detail,edit,update,destroy} = require('../controllers/productsControllers')
const validatorProducts = require('../validations/productValidator')


/*products*/
router.get('/add',add);
router.post('/add',upload.single('imagen'),validatorProducts,store);

router.get('/detail/:id',detail)

router.get('/edit/:id',edit);
router.put('/edit/:id',validatorProducts,update)

router.delete('/delete/:id',destroy)

module.exports = router