const { Router } = require('express');
const { createFeedbackHandler } = require('../handlers/feedbackHandlers');
const auth = require('../middleware/auth');

const router = Router();

// Enviar feedback para una evaluación
router.post('/', auth, createFeedbackHandler);

module.exports = router;
