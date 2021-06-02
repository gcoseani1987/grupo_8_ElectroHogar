const fs = require('fs')

const leer = fs.readFileSync(__dirname + '/categorias.json')


const jsonFile = JSON.parse(leer)

module.exports = {
  findAll() {
    return jsonFile.categorias
  },

  findByPk(id) {
    return jsonFile.categorias.find((e) => e.id == id)
  },
}
