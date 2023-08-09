const router = require('express').Router();
// const passport = require('passport')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const studentController = require('../controller/student_controller');
// add student
router.get('/add', studentController.addStudent);

router.post('/add',studentController.createStudent); 

// read student
// router.get('/read', studentController.readStudent);

// update student
router.get('/edit/:id', studentController.editStudent);

router.post('/update/:id', studentController.updateStudent);

// delete student
router.get('/delete/:studentId', studentController.delete);
module.exports = router;