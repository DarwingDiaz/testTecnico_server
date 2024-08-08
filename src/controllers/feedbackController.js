const Feedback = require('../models/Feedback');

const createFeedback = async (evaluation, feedbackProvider, comments) => {
  const feedback = new Feedback({ evaluation, feedbackProvider, comments });
  await feedback.save();
  return feedback;
};

module.exports = {
  createFeedback,
};
