const fs = require('fs')
const path=require('path')



module.exports = {
  fileName: path.resolve(__dirname,'../data/productos.json'),
  readFile() {
    const productosPath=this.fileName;
    const productosJson= fs.readFileSync(productosPath,'utf-8');
    return JSON.parse(productosJson);
  },
  findAll(){
      const productos = this.readFile()
      return productos 
  },
  findByPk(id) {
    const productos = this.readFile();
    const productosEncontrado = productos.productos.find(producto => producto.id==id)
    return productosEncontrado
  },
  crear(i) {
    productos.push(i)
    productosJson = JSON.stringify(productos)
    return fs.writeFileSync(filename, productosJson)
  },

}

