const { Router } = require('express');
const employeesRouter = require('./employees');
const evaluationsRoutes = require('./evaluationsRoutes');
const feedbacksRouter = require('./feedbacks');
const reportsRouter = require('./reports');
const usersRoutes = require('./usersRoutes')

const router = Router();

// Registrar las rutas
router.use('/users', usersRoutes);
router.use('/employees', employeesRouter);
router.use('/evaluations', evaluationsRoutes);
router.use('/feedback', feedbacksRouter);
router.use('/reports', reportsRouter);

module.exports = router;
