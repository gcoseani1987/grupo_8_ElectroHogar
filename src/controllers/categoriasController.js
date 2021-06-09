const categorias=require('../models/categorias')
const productos = require('../models/productos')

const controller = {
  categoria: (req, res) => {
    const id = req.params.id
    let categoria = categorias.findByPk(id)
    let allProducts = productos.findAll()
    let filterProducts = allProducts.filter()
    res.render('categoria.ejs', { categoria })
  },
  
}
  
module.exports = controller 