const categorias=require('../models/categorias')

const controller = {
  categoria: (req, res) => {
    const id = req.params.id
    let categoria = categorias.findByPk(id)
    res.render('categoria.ejs', { categoria })
  },
}
  
module.exports = controller 