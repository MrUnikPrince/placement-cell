const router = require('express').Router();
// const passport = require('passport')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const studentController = require('../controller/student_controller');
// add student

router.get('/add', studentController.addStudent);

router.get('/read', studentController.readStudent);

module.exports = router;