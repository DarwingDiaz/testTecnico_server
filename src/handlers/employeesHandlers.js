const { getAllEmployees } = require('../controllers/employeesController');

const getAllEmployeesHandler = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllEmployeesHandler,
};
