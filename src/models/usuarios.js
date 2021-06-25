const fs = require('fs')
const path = require('path')

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

  validarUsuario(usuarios) {
    usuarios = this.readFile()
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === usuarios.email)
    if (usuarioEncontrado === undefined) {
      return 'Usuario inexistente'
    } else if (usuarioEncontrado.password === usuarios.password) {
      return 'Usuario registrado'
    } else {
      return 'El usuario o la contraseña son incorrectos'
    }
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
  }
}