const categorias=require('../models/categorias')
const productos = require('../models/productos')

const controller = {
  categoria: (req, res) => {
    const id = req.params.id
    let categoria = categorias.findByPk(id)
    let allProducts = productos.findAll()
    let filterProducts = allProducts.filter(categoria=>categoria.nombre==allProducts.categoria)
    console.log(allProducts.categoria)
    res.render('categoria.ejs', { categoria , filterProducts })
  }, 
  
} 
  
module.exports = controller 