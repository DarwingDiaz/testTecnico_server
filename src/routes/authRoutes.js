const { Router } = require('express');
const { registerUserHandler, loginUserHandler } = require('../handlers/usersHandlers');

const router = Router();

router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);

module.exports = router;
