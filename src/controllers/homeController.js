const { Categoria }=require('../database/models')
const { Producto } = require('../database/models')

const controller = {
    home: async (req, res) => {
      let todosLosProductos = await Producto.findAll()
      let productosOferta = todosLosProductos.filter(producto => producto.oferta == true) 
      res.render('home' , { productosOferta })
    },
    carrito: (req, res) => {
      res.render('carritoCompras')
    },    
  }
  
  module.exports = controller