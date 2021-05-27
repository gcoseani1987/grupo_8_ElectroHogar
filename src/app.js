const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3030 

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)); 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port))

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