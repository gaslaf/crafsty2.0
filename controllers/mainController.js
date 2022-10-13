const fs = require('fs');
const path = require('path');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
module.exports = {
    index : (req,res) => {
    productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
    res.render('home',{
        title: 'Craftsy',
        productos
    })
    },
    search : (req,res) =>{
        let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(req.query.busqueda.toLowerCase()))
        return res.render('home',{
            title : 'Resultados',
            productos : resultado,
        })
    }
    
}