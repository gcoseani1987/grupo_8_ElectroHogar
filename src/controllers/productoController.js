const producto = require('../models/productos')

const controller = {
    listado: (req, res) => {
      let productos = producto.findAll() 
      res.render('./productos/listadoDeProductos.ejs', { productos: productos })
    },

    detalle: (req, res) => {
      let id = req.params.id
      let productoEncontrado = producto.findByPk(id)
      res.render('productos/detalleProducto.ejs', { productoEncontrado })
    },
    
    formNew: (req, res) => {
      res.render('productos/agregarProducto.ejs')
    },

    crear: (req, res) => {
      const producto = req.body
      const productoCreado = producto.crear(producto)
      res.redirect('/productos/listado')
    },

    editar: (req, res) => {
      let id = req.params.id
      let productoEncontrado = producto.findByPk(id)
      res.render('productos/editarProducto.ejs', { productoEncontrado: productoEncontrado})
    },

    update: (req, res) => {
      let data = req.body
      let id = req.params.id
      productos.update(data, id)
      res.redirect('/productos/listado')
    },
  
    delete: (req, res) => {
      let id = req.params.id
      let productoEliminado = producto.delete(id)
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
