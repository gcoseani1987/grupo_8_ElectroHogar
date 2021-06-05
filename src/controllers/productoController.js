const productos = require('../models/productos.js')
const { propfind } = require('../routes/productoRoutes.js')
const controller = {
    detalle: (req, res) => {
      res.render('productos/detalleProducto.ejs')
    },
    agregar: (req, res) => {
        res.render('productos/agregarProducto.ejs')
      },
    editar: (req,res) => {
      res.render('productos/editarProducto.ejs')
    },
    listado: (req, res) => {
      let productosLista = productos.findAll() 
      res.render('./productos/listadoDeProductos.ejs', { productosLista: productosLista.productos })
    },
  }
  
  module.exports = controller  
