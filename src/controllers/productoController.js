const { validationResult } = require('express-validator')
const { Op } = require('sequelize')
const { Producto, Categoria, Imagen, Color, Usuario } = require('../database/models')
const fs = require('fs')

const controller = {
    listado: async (req, res) => {
      let productos = await Producto.findAll({
        include : [{ association: "imagenes"},{ association: "categoria"}],
        where : {
          nombre : {
            [Op.substring] : req.query.busqueda ? req.query.busqueda : '' 
          }
        }
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
    
    formNew: async (req, res) => { 
      const categorias = await Categoria.findAll() 
      const colores = await Color.findAll()
      res.render('productos/agregarProducto' , { categorias, colores })
    },
  
    crear: async (req, res) => {
      const resultadoValidaciones = validationResult(req)
      const categorias = await Categoria.findAll() 
      const colores = await Color.findAll()
      if(!resultadoValidaciones.isEmpty()){
        const oldData = req.body
        res.render('productos/agregarProducto',{ oldData, categorias, colores, errors: resultadoValidaciones.mapped()})
        return
      } 
        const usuario_id = req.session.usuarioLoggeado[0].id
        let { nombre,descripcion,stock,categoriaProd,alto,ancho,color,garantia,oferta,modelo,origen,profundidad,peso,precio } = req.body
        let producto = await Producto.create({
          usuario_id,
          nombre,  
          color_id : color,
          descripcion,
          stock,
          categoria_id : categoriaProd,
          alto,
          ancho,
          garantia,
          modelo,
          origen,
          profundidad,
          peso,
          oferta,
          precio,
      })
      
      await Imagen.create({ 
        nombre : '/images/' + req.file.filename,
        producto_id : producto.id
      })
      res.redirect('/productos/listado');
    }, 

    editar: async (req, res) => {
      let id = req.params.id
      const categorias = await Categoria.findAll();
      const colores = await Color.findAll();
      let productoEncontrado = await Producto.findByPk(id,{
        include : [{ association: "imagenes"},{ association: "color"},{ association: "categoria"}],
        where : {
          id : id 
        }
      })
      res.render('productos/editarProducto', { productoEncontrado, categorias, colores })
    },

    actualizar: async (req, res) => {
      const { id } = req.params;
      const productoOriginal = await Producto.findByPk(id)
      const data = req.body; 
      const { file } = req
  
      if (file) {
        await Imagen.update({
          nombre : '/images/' + req.file.filename
        },{
          where: { producto_id : id }
        })
      }
  
      data.color_id = data.color
      data.categoria_id = data.categoriaProd
      delete data.color
      delete data.categoriaProd 
  
      await Producto.update(data,{
        where: { id : id } 
      });
     
      res.redirect('/productos/listado');
  },
  
    borrar: async (req, res) => {
        await Imagen.destroy({
          where : {
            producto_id: req.params.id
          }
        })
        await Producto.destroy({
        where : { 
          id : req.params.id
        }
      })
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
 