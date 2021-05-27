const controller = {
    detalle: (req, res) => {
      res.render('productos/detalleProducto.ejs')
    },
    agregar: (req, res) => {
        res.render('productos/agregarProducto.ejs')
      },
  }
  
  module.exports = controller  