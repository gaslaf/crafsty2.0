const fs = require('fs');
const path = require('path');
const capitalize = require('../utils/capitalizeOneLetter')
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
        if(nombre.trim() != "" && precio != ""){
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
        return res.redirect('/')
    },
    detail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)
        if(producto){
            res.render('productDetail',{
                productos,
                producto,
                capitalize
            })
        }else{
            return res.redirect('/')
        }
        
    },
    edit : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)

            res.render('productEdit',{
                productos,
                categorias,
                producto,
            })
        
    },
    update : (req,res) => {
        const {nombre,precio,descripcion,categoria} = req.body;
        productos.forEach(producto => {
            if(producto.id === +req.params.id){
                producto.nombre = nombre;
                producto.descripcion = descripcion;
                producto.precio = +precio;
                producto.categoria = categoria;
            }
            productos.push(producto)
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8')
        productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
        return res.redirect('/')
        });
        
    },
        destroy : (req,res) => {
          let productoModi = productos.filter(producto => producto.id != +req.params.id) 
        
          fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productoModi,null,2),'utf-8')
          productos= JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
          return res.redirect('/')
        }
            
    }



