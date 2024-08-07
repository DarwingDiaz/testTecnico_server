const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  evaluation: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation', required: true }, // Relación con Evaluación
  feedbackProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Relación con Usuario que provee feedback
  comments: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
