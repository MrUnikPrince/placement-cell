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
module.exports.readStudent = (req, res) => {

}
