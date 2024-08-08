const { Router } = require('express');
const { getEvaluationsByEmployeeHandler } = require('../handlers/reportsHandlers');
const auth = require('../middleware/auth');

const router = Router();

router.get('/employee/:id', auth, getEvaluationsByEmployeeHandler);

module.exports = router;
