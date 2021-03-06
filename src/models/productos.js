const fs = require('fs')
const path=require('path')


module.exports = {
  fileName: path.resolve(__dirname,'../data/productos.json'),

  readFile() {
    const productosPath=this.fileName;
    const productosJson= fs.readFileSync(productosPath,'utf-8');
    return JSON.parse(productosJson);
  },

  writeFile(newData) {
    const dataJson = JSON.stringify(newData, null, 2);
    fs.writeFileSync(this.fileName, dataJson);
},

  generarId() {
    const producto = this.readFile();
    const ultimoProducto = producto.pop();
    return ultimoProducto.id + 1;
},

  findAll(){
      const productos = this.readFile()
      return productos 
  }, 

  findByPk(id) { 
    const productos = this.findAll();
    const productoEncontrado = productos.find(producto => producto.id==id)
    return productoEncontrado
  },

  crear(producto) {
    producto.id = this.generarId();
    const productos = this.readFile();
    const listaActualizada = [...productos, producto ];
    this.writeFile(listaActualizada); 
    return producto;
}, 

  delete (id){
  const productos = this.readFile();
  const nuevoProducto = productos.filter(idProducto => idProducto.id != id)
  this.writeFile(nuevoProducto)
},

modificar (data ,id){
  const productos = this.readFile();
  const productoAEditar = productos.map(producto =>{
   if(producto.id == id){
       producto ={
          id: producto.id,
          ...data 
       }
   } return producto 
  });  
  this.writeFile(productoAEditar)
}
}

 