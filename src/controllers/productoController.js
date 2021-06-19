const { validationResult } = require('express-validator')
const producto = require('../models/productos')
const { productosPath } = require('../models/usuarios')
const fs = require('fs')

const controller = {
    listado: (req, res) => {
      let productos = producto.findAll() 
      res.render('./productos/listadoDeProductos', { productos })
    }, 
 
    detalle: (req, res) => {  
      let {id} = req.params.id
      let productoEncontrado = producto.findByPk(id) 
      res.render('productos/detalleProducto', { productoEncontrado } )
    },
    
    formNew: (req, res) => {
      res.render('productos/agregarProducto')
    },
 
    crear: (req, res) => {
      const resultadoValidaciones = validationResult(req)
      if(!resultadoValidaciones.isEmpty()){
        if(req.file){
          fs.unlinkSync(req.file.path)
        }
        const oldData = req.body
        res.render('productos/agregarProducto',{ oldData, errors: resultadoValidaciones.mapped()})
        return
      }
      const { nombre,descripcion,stock,categoria,alto,ancho,color,garantia,modelo,origen,profundidad,precio } = req.body
      const productoNuevo = {nombre,descripcion,stock,categoria,alto,ancho,color,garantia,modelo,
        origen,profundidad,precio, imagen : '/images/' + req.file.filename }
        producto.crear(productoNuevo)
        res.redirect('/productos/listado')
      
    }, 

    editar: (req, res) => {
      let id = req.params.id
      let productoEncontrado = producto.findByPk(id)
      res.render('productos/editarProducto', { productoEncontrado })
    },

    actualizar: (req, res) => {
      const { id } = req.params;
      const { nombre,descripcion,stock,categoria,alto,ancho,color,garantia,modelo,origen,profundidad,precio } = req.body
      const data = req.body; 
      const productoOriginal = producto.findByPk(id)
      const { file } = req
      let imagen
      if (file) {
          imagen = '/images/' + file.filename
      } else {
          imagen = productoOriginal.image
      }
      data.imagen = imagen
      producto.modificar(data, id);
      res.redirect('/productos/listado');
  },
  
    borrar: (req, res) => {
      let id = req.params.id
      let productoEliminado = producto.delete(id)
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
 