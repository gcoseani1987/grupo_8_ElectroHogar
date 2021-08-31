const { Categoria, Producto }=require('../database/models')

const controller = {
  categoria: async (req, res) => {
    const id = req.params.id
    let categoria = await Categoria.findByPk(id)
    let filterProducts = await Producto.findAll({
      include : [{ association: "imagenes"},{ association: "categoria"}],
      where : {
        categoria_id : categoria.id
      }
    }
    )
    res.render('categoria', { categoria , filterProducts })
  }, 
  
} 
     
module.exports = controller 