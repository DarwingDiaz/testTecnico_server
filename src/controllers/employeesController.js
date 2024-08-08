const Employee = require('../models/Employee');

const getAllEmployees = async () => {
  return await Employee.find().populate('user');
};

module.exports = {
  getAllEmployees,
};
