const fs = require('fs');
const path = require('path');

const categorias = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categorias.json'),'utf-8'))
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')

module.exports = {
    add : (req,res) => res.render('productAdd',{
        categorias,
        productos,
        title : "Agregar producto"
    }),
    store : (req,res) => {
        const {nombre,precio,descripcion,categoria} = req.body;
        let producto = {
            id : productos[productos.length - 1].id + 1,
            nombre,
            precio : +precio,
            descripcion,
            categoria,
            imagen : "img-phone-03.jpg"
        }
        productos.push(producto)
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8')
        productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
        return res.redirect('/')
    }
            
    }



