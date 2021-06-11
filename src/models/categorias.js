const fs = require('fs')
const path=require('path')



module.exports = {
  fileName: path.resolve(__dirname,'../data/categorias.json'),
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


