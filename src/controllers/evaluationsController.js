const Evaluation = require('../models/Evaluation');

const createEvaluation = async (req, res) => {
  try {
    const evaluation = new Evaluation(req.body);
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ message: 'Evaluación no encontrada' });
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evaluation) return res.status(404).json({ message: 'Evaluación no encontrada' });
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvaluationsByEmployee = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({ employee: req.params.id });
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEvaluation,
  getEvaluationById,
  updateEvaluation,
  getEvaluationsByEmployee,
};
