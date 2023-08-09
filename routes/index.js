const router = require('express').Router();
const passport = require('passport')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const mainController = require('../controller/main_controller');

router.get('/' , mainController.home);
// dashbaord
router.get('/dashboard', ensureAuthenticated , mainController.dashboard);



router.use('/users', require('./users'));
router.use('/student', require('./student'));



module.exports = router;