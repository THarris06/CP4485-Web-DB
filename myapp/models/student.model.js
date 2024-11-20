const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    studentId: {
        type: Number,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    startYear: {
        type: Number,
        required: true
    },
    startSemester: {
        type: String,
        required: true
    },
    creditsEarned: {
        type: Number,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;