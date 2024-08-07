const mongoose = require('mongoose');
const { Schema } = mongoose;

const evaluationSchema = new Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true }, // Relación con Empleado
  evaluator: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Relación con Usuario que evalúa
  date: { type: Date, required: true },
  score: { type: Number, required: true },
  comments: { type: String}
});

module.exports = mongoose.model('Evaluation', evaluationSchema);