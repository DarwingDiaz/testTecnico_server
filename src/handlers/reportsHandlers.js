const { getEvaluationsByEmployee } = require('../controllers/reportsController');

const getEvaluationsByEmployeeHandler = async (req, res) => {
  try {
    const evaluations = await getEvaluationsByEmployee(req.params.id);
    if (!evaluations.length) {
      return res.status(404).json({ message: 'No se encontraron evaluaciones para este empleado' });
    }
    res.json(evaluations);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getEvaluationsByEmployeeHandler,
};
