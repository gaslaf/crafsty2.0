const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json')),'utf-8')
const usuarios =  JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','usuarios.json')),'utf-8')
module.exports = {
    register : (req,res) => res.render('register',{
        title: 'Registrate',
        productos
    }),
    login : (req,res) => res.render('login',{
        title : 'Entrar',
        productos
    }),
    processRegister : (req,res) => {
        const {nombre,email,password,pais,genero} = req.body
        let usuario = {
            id : usuarios[usuarios.length -1] ? usuarios[usuarios.length -1].id +1 : 1,
            nombre : nombre.trim(),
            email : email.trim(),
            password : bcryptjs.hashSync(password,10),//para encriptar passwords
            pais,
            genero,
            rol : 'user'
        }
        usuarios.push(usuario);
        fs.writeFileSync(path.join(__dirname,'..','data','usuarios.json'),JSON.stringify(usuarios,null,2),'utf-8')
        return res.redirect('/')
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {email} = req.body;
            let usuario = usuarios.find(usuario => usuario.email === req.body.email)
            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.nombre ,
                rol : usuario.rol
            }
            return res.redirect('/');
        }else{
            return res.render('login',{
                title : 'login',
                errores : errors.mapped()
            })
        }

    },
    profile : (req,res) => res.render('profile',{
        title : 'Perfil'
    }),
    logout : (req,res) => {
        req.session.destroy()
        return res.redirect('/')
    }

    
}