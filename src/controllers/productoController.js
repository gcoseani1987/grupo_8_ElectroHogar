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
    crear: (req, res) => {
      let producosActualizados = req.body
      productos.crear(producosActualizados)
      res.redirect('/productos/listado') 
    },
    listado: (req, res) => {
      /* let productos = productos.findAll() */
      res.render('./productos/listadoDeProductos.ejs')
    },

  }
  
  module.exports = controller  