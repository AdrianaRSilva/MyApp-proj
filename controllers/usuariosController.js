const usuarios = require("../models/usuarios")

const usuariosController = {
    index: (req, res) => {
      //  return res.send('estou ecxibido essa mensagem atraves do controller!')
      return res.send(usuarios.listarUsuarios)
    }
}
module.exports = usuariosController