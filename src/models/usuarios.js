const fs = require('fs')
const path = require('path')
const bcryptjs = require('bcryptjs')

module.exports = {
  usuariosPath: path.resolve(__dirname, '../data/usuarios.json'),

  readFile() {
    const usuariosJson = JSON.parse(fs.readFileSync(this.usuariosPath, 'utf-8'))
    return usuariosJson
  },

  writeFile(newData) {
    fs.writeFileSync(this.usuariosPath, JSON.stringify(newData, null, 2))
    return newData
  },
 
  generarId() {
    return this.readFile().pop().id + 1
  },

  findAll() {
    return this.readFile()
},

  findUser(usuario) {
    const usuarios = this.readFile()
    return usuarios.find(e => e.email === usuario.email)

},
  findByPk(id) {
    const usuarios = this.readFile() 
    return usuarios.find(e => e.id == id)
},

  crearUsuario(nuevoUsuario) {
    nuevoUsuario.id = this.generarId()
    const usuariosJson = this.readFile()
    const usuariosUpdated = [...usuariosJson, nuevoUsuario]
    this.writeFile(usuariosUpdated) 
    return nuevoUsuario
  }, 
 

  delete (id){
    const usuarios = this.readFile();
    const nuevoUsuario = usuarios.filter(idUsuario => idUsuario.id != id)
    this.writeFile(nuevoUsuario)
  },

  findByField(field, value) {
    const usuarios = this.readFile();
    const usuarioEncontrado = usuarios.find(usuario => usuario[field] == value) 
    return usuarioEncontrado
  },

  modificar (data ,id){
    const usuarios = this.readFile();
    const usuarioAEditar = usuarios.map(usuario =>{
     if(usuario.id == id){
         usuario ={
            id: usuario.id,
            ...data 
         }
     } return usuario 
    });  
    this.writeFile(usuarioAEditar)
  }
}