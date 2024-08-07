const mongoose = require('mongoose');
const User = require('./src/models/User');
const Employee = require('./src/models/Employee');
const Evaluation = require('./src/models/Evaluation');
const Feedback = require('./src/models/Feedback');
const bcrypt = require('bcrypt');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Limpiar la base de datos
    await User.deleteMany({});
    await Employee.deleteMany({});
    await Evaluation.deleteMany({});
    await Feedback.deleteMany({});

    // Crear usuarios de prueba
    const user1 = new User({
      username: 'john_doe',
      password: await bcrypt.hash('password123', 10),
      email: 'john@example.com',
    });

    const user2 = new User({
      username: 'jane_doe',
      password: await bcrypt.hash('password123', 10),
      email: 'jane@example.com',
    });

    await user1.save();
    await user2.save();

    // Crear empleados de prueba
    const employee1 = new Employee({
      name: 'John Doe',
      position: 'Software Engineer',
      hireDate: new Date('2022-01-01'), // Fecha de contratación de ejemplo
      department: 'Development', // Departamento de ejemplo
      user: user1._id,
    });

    const employee2 = new Employee({
      name: 'Jane Doe',
      position: 'Product Manager',
      hireDate: new Date('2023-02-01'), // Fecha de contratación de ejemplo
      department: 'Management', // Departamento de ejemplo
      user: user2._id,
    });

    await employee1.save();
    await employee2.save();

    // Crear evaluaciones de prueba
    const evaluation1 = new Evaluation({
      employee: employee1._id,
      evaluator: user2._id,
      date: new Date(),
      score: 8,
      comments: 'Good performance',
    });

    const evaluation2 = new Evaluation({
      employee: employee2._id,
      evaluator: user1._id,
      date: new Date(),
      score: 9,
      comments: 'Excellent performance',
    });

    await evaluation1.save();
    await evaluation2.save();

    // Crear feedback de prueba
    const feedback1 = new Feedback({
      evaluation: evaluation1._id,
      feedbackProvider: user2._id,
      comments: 'Keep up the good work',
    });

    const feedback2 = new Feedback({
      evaluation: evaluation2._id,
      feedbackProvider: user1._id,
      comments: 'Outstanding contributions',
    });

    await feedback1.save();
    await feedback2.save();

    console.log('Base de datos poblada con éxito!');
    process.exit(0);
  } catch (error) {
    console.error('Error poblando la base de datos', error);
    process.exit(1);
  }
};

seedDatabase();
