const { validationResult } = require('express-validator')
const { Producto } = require('../database/models')
const { Categoria } = require('../database/models')
const { Imagenes } = require('../database/models')
const { Color } = require('../database/models')
const { Usuario } = require('../database/models')
const { productosPath, findAll } = require('../models/usuarios')
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
        if(req.file){
          fs.unlinkSync(req.file.path)
        }
        const oldData = req.body
        res.render('productos/agregarProducto',{ oldData, categorias, colores, errors: resultadoValidaciones.mapped()})
        return
      } else {
        const usuario_id = req.session.usuarioLoggeado[0].id
        let { nombre,descripcion,stock,categoriaProd,alto,ancho,color,garantia,oferta,modelo,origen,profundidad,peso,precio } = req.body

        console.log(categoriaProd)
        switch(color){
          case 'blanco':
            color = 1;
            break;
          case 'negro':
            color = 2;
            break;
          case 'gris':
            color = 3;
            break;
          case 'azul':
            color = 4;
            break;
          case 'rojo':
            color = 5;
            break;
          case 'rosado':
            color = 6;
            break;
          case 'verde':
            color = 7;
            break;
          default:
            color = 8;
            break;
        }
        console.log(color)
        console.log(usuario_id)
        Producto.create({
        usuario_id,
        nombre,
        descripcion,
        stock,
        categoria_id : categoriaProd,
        alto,
        ancho,
        color_id : color,
        garantia,
        modelo,
        origen,
        profundidad,
        peso,
        oferta,
        precio,
      })
      .then(producto => {
        console.log(producto);
        Imagenes.create({ 
          nombre : '/images/' + req.file.filename,
          producto_id : producto.id
        })
        .then(imagenes => console.log(imagenes));
        res.redirect('/productos/listado');
      });
      }
    }, 

    editar: async (req, res) => {
      let id = req.params.id
      let productoEncontrado = await Producto.findByPk(id,{
        where : {
          id : id
        }
      })
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
  
    borrar: async (req, res) => {
      let productoEliminado = await Producto.destroy({
        where : { 
          id : id
        }
      })
      res.redirect('/productos/listado')
    },
  }
  
  module.exports = controller  
 