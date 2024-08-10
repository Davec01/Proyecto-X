const express = require('express');
const { body } = require('express-validator');
const { seguirUsuario } = require('../controladores/seguirControlador');

const router = express.Router();

router.post('/seguir', [
  body('seguidor').notEmpty().withMessage('El seguidor es requerido'),
  body('seguido').notEmpty().withMessage('El usuario a seguir es requerido')
], seguirUsuario);

module.exports = router;
