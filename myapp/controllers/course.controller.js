const Course = require ("../models/course.model.js");

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById (id);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

const createCourse = async (req, res) => {
    // The browser uses the GET method to send and message, so
    // use postman to send a POST message to the app.
    try {
        // Here we'll use our model to save the data.
        // we expect req.body will contain a course record to save to the db.
        const sched = await Course.create(req.body);
        res.status(200).json(sched);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndUpdate (id, req.body);
        if (!course) {
            return (res.status(404).json({message: "Course not found"}));
        }
        // we re-retrieve the course and relpy with the retrieved version.
        const updatedCourse = await Course.findById(id);
        res.status(200).json(updatedCourse);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndUpdate (id);

        if (!course) {
            return res.status(404).json({message: "Course not found"});
        }

        res.status(200).json({ message: "Course deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
};