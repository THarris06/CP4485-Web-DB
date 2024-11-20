const mongoose = require('mongoose');

const ScheduleSubSchema = mongoose.Schema ({
    day: {
        type: Number,
        required: true,
        dafault: 1
    },
    startTime: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    room: {
        type: String,
        required: true
    },
});
const ScheduleSchema = mongoose.Schema ({
    courseName: {
        type: String,
        required: [true, "Please enter the course name"],
    },
    courseTitle: {
        type: String,
        required: [true, "Please enter the course title"],
    },
    sessions: {
        type: [ScheduleSubSchema]
    },
},
{
    timestamps: true
});

const Course = mongoose.model("Course", ScheduleSchema);

module.exports = Course;