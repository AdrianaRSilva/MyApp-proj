const usuarios = require("../models/usuarios");

const usuarioController = {
    index: (req, res) => {
      //  return res.send('estou ecxibido essa mensagem atraves do controller!')
      return res.send(usuarios.listarUsuarios());
    }
};
module.exports = usuarioController;