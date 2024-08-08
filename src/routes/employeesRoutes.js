const { Router } = require('express');
const { getAllEmployeesHandler } = require('../handlers/employeesHandlers');
const auth = require('../middleware/auth');

const router = Router();

// Obtener todos los empleados
router.get('/', auth, getAllEmployeesHandler);

module.exports = router;
