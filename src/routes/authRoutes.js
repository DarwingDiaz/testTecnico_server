const { Router } = require('express');
const { registerUserHandler, loginUserHandler } = require('../handlers/usersHandlers');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

const router = Router();

router.post('/register', registerUserHandler);
router.post('/login', loginUserHandler);

// Ejemplo de ruta protegida por autenticación y autorización
router.get('/admin', auth, authorize(['Admin']), (req, res) => {
    res.send('Admin area');
});

module.exports = router;
