const exp = require('constants');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

//configurar sesiones de usuarios
const session = require('express-session');
const userLoginCheck = require('./middlewares/localsUserCheck')

const app = express();
const port = 3030;

app.use(session({
    secret : 'Craftsy'
}))

/* envia datos de usuario logeado al cliente*/

app.use(userLoginCheck)

/* manejo de formularios */
app.use(express.urlencoded({extended : false}));
app.use(express.json());
/* routing*/
app.use(express.static('public'))

/*/view engine/*/
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

/* config métodos PUT y DELETE */

app.use(methodOverride('_method'))

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const localsUserCheck = require('./middlewares/localsUserCheck');

app.use('/',mainRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter)
//app.use('/products',productsRouter);


app.use((req,res,next) =>{
    res.status('404').render('error-404',{
        title : 'Página no encontrada'
    });
    next();
})
/** view engine */

app.listen(port, console.log(`Server running on port http://localhost:${port}`));

