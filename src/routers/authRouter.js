const Router = require('express');
const { check } =  require('express-validator');

const controller = require('../controllers/authController');

const router = new Router();

router.post('/registration', [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password', "Password must be longer than 4 characters and shorter than 10 characters").isLength({min: 4, max: 10})
], controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;