const { createFeedback } = require('../controllers/feedbackController');

const createFeedbackHandler = async (req, res) => {
  try {
    const { evaluation, feedbackProvider, comments } = req.body;
    const feedback = await createFeedback(evaluation, feedbackProvider, comments);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createFeedbackHandler,
};
