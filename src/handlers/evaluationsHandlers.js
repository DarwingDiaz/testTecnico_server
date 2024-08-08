const { createEvaluation, getEvaluationById, updateEvaluation, getEvaluationsByEmployee } = require('../controllers/evaluationsController');

const postEvaluationHandler = async (req, res) => {
  await createEvaluation(req, res);
};

const getEvaluationByIdHandler = async (req, res) => {
  await getEvaluationById(req, res);
};

const updateEvaluationHandler = async (req, res) => {
  await updateEvaluation(req, res);
};

const getEvaluationsByEmployeeHandler = async (req, res) => {
  await getEvaluationsByEmployee(req, res);
};

module.exports = {
  postEvaluationHandler,
  getEvaluationByIdHandler,
  updateEvaluationHandler,
  getEvaluationsByEmployeeHandler,
};
