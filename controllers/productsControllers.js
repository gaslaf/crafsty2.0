const fs = require('fs');
const path = require('path');

const categorias = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categorias.json'),'utf-8'))

module.exports = {
    add : (req,res) => {
        return res.render(categorias)
    }
}