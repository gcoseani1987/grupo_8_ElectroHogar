const controller = {
    home: (req, res) => {
      res.render('home.ejs')
    },
    carrito: (req, res) => {
      res.render('carritoCompras.ejs')
    },    
  }
  
  module.exports = controller