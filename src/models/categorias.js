/* const fs = require('fs')
const path=require('path')



module.exports = {
  fileName: path.resolve(__dirname,'./categorias.json'),
  readFile() {
    const categoriasPath=this.fileName;
    const categoriasJson= fs.readFileSync(categoriasPath,'utf-8');
    return JSON.parse(categoriasJson);
  },
  findByPk(id) {
    const categorias = this.readFile();
    const categoriaEncontrada = categorias.find(categoria => categoria.id==id)
    return categoriaEncontrada
  },
}
*/

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
