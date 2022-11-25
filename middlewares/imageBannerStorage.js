const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) =>
    callback (null,'./public/images/banners') , 
    filename: (req, file, callback) => 
    callback(null, 'banner-' + Date.now() + path.extname(file.originalname))
});

const upload = multer({
    storage
})

module.exports = upload