const { registerUser, loginUser } = require('../controllers/usersController');

const registerUserHandler = async (req, res) => {
    await registerUser(req, res);
};

const loginUserHandler = async (req, res) => {
    await loginUser(req, res);
};

module.exports = {
    registerUserHandler,
    loginUserHandler
};
