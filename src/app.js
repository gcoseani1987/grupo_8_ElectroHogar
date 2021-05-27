const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('Servidor corriendo'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');


const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)); 

/* Home */
const homeRoutes=require('./routes/homeRoutes')
app.use('/',homeRoutes)

/* Carrito */

const carritoRoutes =require('./routes/homeRoutes')
app.use('/carritoCompras',carritoRoutes) 

/* Productos */

const productoRoutes = require('./routes/productoRoutes')

app.use('/productos', productoRoutes)


/* Usuarios */

const usersRoutes = require('./routes/usersRoutes')

app.use('/users', usersRoutes)


/*Categorías*/

const categoriasRoutes = require('./routes/categoriasRoutes')

app.use('/categorias', categoriasRoutes)


