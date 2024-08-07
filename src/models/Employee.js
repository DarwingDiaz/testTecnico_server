const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  hireDate: { type: Date, required: true },
  department: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
