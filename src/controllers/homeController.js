const controller = {
    home: (req, res) => {
      res.render('home')
    },
    carrito: (req, res) => {
      res.render('carritoCompras')
    },    
  }
  
  module.exports = controller