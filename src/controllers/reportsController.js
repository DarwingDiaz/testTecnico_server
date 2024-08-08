const Evaluation = require('../models/Evaluation');

const getEvaluationsByEmployee = async (employeeId) => {
  const evaluations = await Evaluation.find({ employee: employeeId }).populate('evaluator');
  return evaluations;
};

module.exports = {
  getEvaluationsByEmployee,
};
