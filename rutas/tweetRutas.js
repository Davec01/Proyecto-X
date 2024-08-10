const express = require('express');
const { body } = require('express-validator');
const { publicarTweet } = require('../controladores/tweetControlador');

const router = express.Router();

router.post('/publicar', [
  body('nombreUsuario').notEmpty().withMessage('El nombre de usuario es requerido'),
  body('mensaje').notEmpty().withMessage('El mensaje es requerido')
], publicarTweet);

module.exports = router;
