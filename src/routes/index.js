const { Router } = require('express');
const employeesRoutes = require('./employeesRoutes');
const feedbackRoutes = require('./feedbackRoutes');
// const reportsRouter = require('./reports');
const authRoutes = require('./authRoutes');
const evaluationsRoutes = require('./evaluationsRoutes');


const router = Router();

// Registrar las rutas
router.use('/auth', authRoutes);
router.use('/employees', employeesRoutes);
router.use('/evaluations', evaluationsRoutes);
router.use('/feedback', feedbackRoutes);
// router.use('/reports', reportsRouter);

module.exports = router;
