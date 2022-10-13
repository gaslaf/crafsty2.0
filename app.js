const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(express.static('public'))

/*/view engine/*/
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/',mainRouter);
app.use('/users',usersRouter);
app.use('/productAdd',productsRouter)
//app.use('/products',productsRouter);



app.listen(port, console.log(`Server running on port http://localhost:${port}`));

