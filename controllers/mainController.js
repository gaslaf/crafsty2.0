const fs = require('fs');
const path = require('path');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
let banner = require('../data/banners.json')
module.exports = {
    index : (req,res) => {
    productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
    res.render('home',{
        title: 'Craftsy',
        productos,
        banner
    })
    },
    search : (req,res) =>{
        let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(req.query.busqueda.toLowerCase()))
        if(req.query.busqueda){
            return res.render('home',{
                title : 'Resultados',
                productos : resultado,
                busqueda : req.query.busqueda
            }
            )}
                return res.render('home',{
                    title : "Craftsy",
                    productos,
                })
            

            

    },
    admin : (req,res) =>{
        return res.render('admin/admin',{
            title : 'Administrador',
            productos
        })
    },
    addBanner : (req,res) =>{
        return res.render('admin/bannerAdd',{
            title : 'Agregar Banner'
        })
    },
    allBanner : (req,res) =>{
        res.render('admin/bannerAll',{
            title : 'Todos los banners',
            banner
        })
    },
    storeBanner : (req,res) =>{
        if(req.file){
            banner.push(req.file.filename)
            fs.writeFileSync(path.join(__dirname,'..','data','banners.json'),JSON.stringify(banner,null,2),'utf-8');
            return res.redirect('/admin/banner/all');
        }
    }
    
}