const seguidores = [
    { seguidor: 'Josué David', seguido: 'Devies Herrera' }
  ];
  
  exports.seguirUsuario = (req, res) => {
    const { seguidor, seguido } = req.body;
    if (seguidores.some(s => s.seguidor === seguidor && s.seguido === seguido)) {
      return res.status(400).json({ mensaje: 'Ya sigues a este usuario' });
    }
    seguidores.push({ seguidor, seguido });
    res.status(201).json({ mensaje: 'Usuario seguido exitosamente' });
  };
  