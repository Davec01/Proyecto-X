const { usuarios } = require('../datos');

exports.registrar = (req, res) => {
  const { nombreCompleto, nombreUsuario, email, password } = req.body;
  if (usuarios.some(usuario => usuario.nombreUsuario === nombreUsuario || usuario.email === email)) {
    return res.status(400).json({ mensaje: 'El nombre de usuario o email ya existe' });
  }
  usuarios.push({ nombreCompleto, nombreUsuario, email, password });
  res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
};

exports.iniciarSesion = (req, res) => {
  const { nombreUsuario, password } = req.body;

  const usuario = usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario);
  if (!usuario) {
    return res.status(400).json({ mensaje: 'El usuario no existe' });
  }

  if (usuario.password !== password) {
    return res.status(400).json({ mensaje: 'Credenciales inválidas' });
  }

  res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario });
};
