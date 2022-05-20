const Router = require('express').Router;
const userController = require('../controllers/user.controller');

const router = new Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/login/activate/:link', userController.activate);
router.post('/logout', userController.logout);
router.get('/refresh');
router.get('/users');

module.exports = router;