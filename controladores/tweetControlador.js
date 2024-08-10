const { usuarios } = require('../datos');
const tweets = [];

exports.publicarTweet = (req, res) => {
  console.log('Request body:', req.body); // Depuración: Ver qué está recibiendo el servidor

  const { nombreUsuario, mensaje } = req.body;

  const usuario = usuarios.find(u => u.nombreUsuario === nombreUsuario);
  if (!usuario) {
    return res.status(400).json({ mensaje: 'El usuario no existe' });
  }

  if (!mensaje || typeof mensaje !== 'string') {
    console.log('Tipo de mensaje:', typeof mensaje); // Verificar el tipo de dato que se recibe
    return res.status(400).json({ mensaje: 'El mensaje es requerido y debe ser un texto válido' });
  }

  if (mensaje.length > 280) {
    return res.status(400).json({ mensaje: 'El tweet no puede exceder los 280 caracteres' });
  }

  const tweet = { nombreUsuario, mensaje, creadoEn: new Date() };
  tweets.push(tweet);
  res.status(201).json({ mensaje: 'Tweet publicado exitosamente', tweet });
};
