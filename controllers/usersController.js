const path = require('path')

module.exports = {
    register : (req,res) => res.render('register',{
        title: 'Registrate'
    }),
    login : (req,res) => res.render('login',{
        title : 'Entrar'
    })
    
}