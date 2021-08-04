const { Categoria }=require('../database/models')
const { Producto } = require('../database/models')

const controller = {
  categoria: async (req, res) => {
    const id = req.params.id
    let categoria = await Categoria.findByPk(id)
    let allProducts = await Producto.findAll()
    let filterProducts = allProducts.filter(producto=>producto.categoriaProd==categoria.nombre) 
    res.render('categoria', { categoria , filterProducts })
  }, 
  
} 
  
module.exports = controller 