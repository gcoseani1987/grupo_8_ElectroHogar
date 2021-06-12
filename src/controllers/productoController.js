const producto = require('../models/productos')
const { productosPath } = require('../models/usuarios')

const controller = {
    listado: (req, res) => {
      let productos = producto.findAll() 
      res.render('./productos/listadoDeProductos.ejs', { productos })
    },

    detalle: (req, res) => {
      let id = req.params.id
      let productoEncontrado = producto.findByPk(id) 
      res.render('productos/detalleProducto.ejs', { productoEncontrado } )
    },
    
    formNew: (req, res) => {
      res.render('productos/agregarProducto.ejs')
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
      res.render('productos/editarProducto.ejs', { productoEncontrado })
    },

    update: (req, res) => {
      let data = req.body
      let id = req.params.id
      producto.update(data, id)
      res.redirect('/productos/listado')
    },
  
    delete: (req, res) => {
      let id = req.params.id
      let productoEliminado = producto.delete(id)
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
