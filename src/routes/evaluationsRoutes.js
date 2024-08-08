const { Router } = require('express');
const {
  postEvaluationHandler,
  getEvaluationByIdHandler,
  updateEvaluationHandler,
  getEvaluationsByEmployeeHandler,
} = require('../handlers/evaluationsHandlers');

const router = Router();

// Crear una nueva evaluación
router.post('/', postEvaluationHandler);

// Obtener detalles de una evaluación
router.get('/:id', getEvaluationByIdHandler);

// Actualizar una evaluación
router.put('/:id', updateEvaluationHandler);

// Obtener evaluaciones de un empleado
router.get('/employee/:id', getEvaluationsByEmployeeHandler);

module.exports = router;
