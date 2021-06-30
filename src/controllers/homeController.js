const categorias=require('../models/categorias')
const productos = require('../models/productos')

const controller = {
    home: (req, res) => {
      let todosLosProductos = productos.findAll()
      let productosOferta = todosLosProductos.filter(producto=>producto.oferta==='si') 
      res.render('home' , { productosOferta })
    },
    carrito: (req, res) => {
      res.render('carritoCompras')
    },    
  }
  
  module.exports = controller