const producto = require('../models/productos')
const { productosPath } = require('../models/usuarios')

const controller = {
    listado: (req, res) => {
      let productos = producto.findAll() 
      res.render('./productos/listadoDeProductos', { productos })
    },
 
    detalle: (req, res) => {
      let id = req.params.id
      let productoEncontrado = producto.findByPk(id) 
      res.render('productos/detalleProducto', { productoEncontrado } )
    },
    
    formNew: (req, res) => {
      res.render('productos/agregarProducto')
    },

    crear: (req, res) => {
      const nuevoProducto = req.body 
      nuevoProducto.imagen = '/images/' + req.file.filename
      console.log(nuevoProducto)
      producto.crear(nuevoProducto)
      res.redirect('/productos/listado')
    },

    editar: (req, res) => {
      let id = req.params.id
      let productoEncontrado = producto.findByPk(id)
      res.render('productos/editarProducto', { productoEncontrado })
    },

    actualizar: (req, res) => {
      let data = req.body
      let id = req.params.id
      producto.update(data, id)
      res.redirect('/productos/listado')
    },
  
    borrar: (req, res) => {
      let id = req.params.id
      let productoEliminado = producto.delete(id)
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
