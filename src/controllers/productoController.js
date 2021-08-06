const { validationResult } = require('express-validator')
const { Producto } = require('../database/models')
const { Categoria } = require('../database/models')
const { Imagenes } = require('../database/models')
const { Color } = require('../database/models')
const { Usuario } = require('../database/models')
const { productosPath } = require('../models/usuarios')
const fs = require('fs')

const controller = {
    listado: async (req, res) => {
      let productos = await Producto.findAll({
        include : [{ association: "imagenes"},{ association: "categoria"}]
      }) 
      res.render('./productos/listadoDeProductos', { productos })
    }, 
 
    detalle: async (req, res) => {  
      let id = req.params.id 
      let productoEncontrado = await Producto.findByPk(id,{
        include : [{ association: "imagenes"},{ association: "categoria"},{ association: "color"}]
      })
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
      const { nombre,descripcion,stock,categoriaProd,alto,ancho,color,garantia,oferta,modelo,origen,profundidad,peso,precio } = req.body
      const productoNuevo = {nombre,descripcion,stock,categoriaProd,alto,ancho,color,garantia,modelo,
        origen,profundidad,peso,oferta,precio, imagen : '/images/' + req.file.filename }
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
      const productoOriginal = producto.findByPk(id)
      const data = req.body; 
      const { file } = req
      let imagen
      if (file) {
        imagen = '/images/' + req.file.filename
      } else {
        imagen = productoOriginal.imagen
      }
      data.imagen = imagen
      const { nombre,descripcion,stock,categoriaProd,alto,ancho,color,garantia,oferta,modelo,origen,profundidad,peso,precio } = req.body
      const dataNueva = {nombre,descripcion,oferta,stock,categoriaProd,alto,ancho,color,garantia,modelo,
        origen,profundidad,peso, precio , imagen }
      producto.modificar(dataNueva, id);
      res.redirect('/productos/listado');
  },
  
    borrar: (req, res) => {
      let id = req.params.id
      let productoEliminado = producto.delete(id)
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
 