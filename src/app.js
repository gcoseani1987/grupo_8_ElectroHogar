const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3030 

//requerimos la constante que nos arma la ruta
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath)); 

//configuracion del template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');

//requiremos la extension que nos permite trabajar con formularios
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//metodo override para trabajar con put y delete en HTML
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//corremos el servidor
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

/* Error 404 */
app.use((req, res, next) => {
    res.status(404).render('not-found')
})