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
  }
  
  module.exports = controller  