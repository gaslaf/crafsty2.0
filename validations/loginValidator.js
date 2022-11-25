const {body} = require('express-validator')
const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path')
const usuarios =  JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','usuarios.json')),'utf-8')


module.exports = [
    body('email')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.email === value && bcryptjs.compareSync(req.body.password, usuario.password))

        if(usuario){
            return true
        }else{
            return false
        }
    }).withMessage('Credenciales invalidas. ')
]