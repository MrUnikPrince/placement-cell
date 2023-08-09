const Student = require("../models/student");

// add student
module.exports.addStudent = (req, res) => {

    return res.render("add_student", {
        title: "Add Student",
    });
};

module.exports.createStudent = async (req, res) => {
    try {
        const {
            name,
            email,
            batch,
            college,
            placementStatus,
            dsa_score,
            react_score,
            webdev_score,
        } = req.body;


        // if student is already there
        const student = await Student.findOne({ email });

        //   if not 
        if (!student) {
            const savedStudent = await Student.create({
                name,
                email,
                college,
                batch,
                dsa_score,
                react_score,
                webdev_score,
                placementStatus
            });
            return res.redirect('/dashboard');
        }
    } catch (err) {
        console.log('Error in Adding Student data');
    }
}
// read student
module.exports.editStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    return res.render("edit_student", {
        title: "Edit Student",
        student_details: student,
    });
}

module.exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        const {
            name,
            college,
            batch,
            dsa_score,
            react_score,
            webdev_score,
            placementStatus,
        } = req.body;

        if (!student) {
            return res.redirect("back");
        }
        student.name = name;
        student.college = college;
        student.batch = batch;
        student.dsa_score = dsa_score;
        student.react_score = react_score;
        student.webdev_score = webdev_score;
        student.placementStatus = placementStatus;

        student.save();
        return res.redirect("/dashboard");
    } catch (err) {
        console.log('error in updating Student');
        return res.redirect('back');
    }
}


// delete student
module.exports.delete = async (req,res) => {

}