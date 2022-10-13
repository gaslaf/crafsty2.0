const path = require('path');
const fs = require('fs');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')

module.exports = {
    register : (req,res) => res.render('register',{
        title: 'Registrate',
        productos
    }),
    login : (req,res) => res.render('login',{
        title : 'Entrar',
        productos
    })
    
}