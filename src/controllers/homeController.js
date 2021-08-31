const { Categoria, Producto }=require('../database/models')

const controller = {
    home: async (req, res) => {
      let productosOferta = await Producto.findAll({
          include : [{ association: "imagenes"},{ association: "categoria"}],
          where : {
            oferta : true
          }
        }
        )
      res.render('home' , { productosOferta })
    },
    carrito: (req, res) => {
      res.render('carritoCompras')
    },     
  }
  
  module.exports = controller