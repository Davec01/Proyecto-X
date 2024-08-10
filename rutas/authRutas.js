const express = require('express');
const { body } = require('express-validator');
const { registrar, iniciarSesion } = require('../controladores/authControlador');

const router = express.Router();

router.post('/registrar', [
  body('nombreUsuario').notEmpty().withMessage('El nombre de usuario es requerido'),
  body('email').isEmail().withMessage('Se requiere un email válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
], registrar);

router.post('/iniciar-sesion', [
  body('nombreUsuario').notEmpty().withMessage('El nombre de usuario es requerido'),
  body('password').notEmpty().withMessage('La contraseña es requerida')
], iniciarSesion);

module.exports = router;
