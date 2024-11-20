// 1
// const Course = require('./models/schedule.model.js'); // 3b.

const express = require('express');
const cors = require('cors');
const courseRoute = require ("./routes/course.route.js");
const studentRoute = require ("./routes/student.route.js")
const app = express();
const port = 3001

// 2
app.use(express.json());
app.use (cors());
app.use ("/api/courses", courseRoute);
app.use ("/api/students", studentRoute);

// 3
const mongoose = require('mongoose');

// 4
mongoose.connect('mongodb://Student21:123123@logan', { dbName: 'home21' })
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        });
    })
    .catch(() => {
        console.log("Failed to connect to the database.");
    });

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// // create course
// app.post('/api/courses', async (req, res) => {
//     // The browser uses the GET method to send and message, so
//     // use postman to send a POST message to the app.
//     try {
//         // Here we'll use our model to save the data.
//         // we expect req.body will contain a course record to save to the db.
//         const sched = await Course.create(req.body);
//         res.status(200).json(sched);
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // get courses
// app.get ('/api/courses', async (req, res) => {
//     try {
//         const courses = await Course.find ({});
//         res.status(200).json(courses);
//     }
//     catch (err) {
//         res.status(500).json({message: err.message})
//     }
// });

// // get course
// app.get ('/api/courses/id=:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const course = await Course.findById (id);
//         res.status(200).json(course);
//     }
//     catch (err) {
//         res.status(500).json({message: err.message})
//     }
// });

// // update course
// app.put ('/api/courses/id=:id', async (req, res) =>{
//     try {
//         const { id } = req.params;
//         const course = await Course.findByIdAndUpdate (id, req.body);
//         if (!course) {
//             return (resp.status(404).json({message: "Course not found"}));
//         }
//         // we re-retrieve the course and relpy with the retrieved version.
//         const updatedCourse = await Course.findById(id);
//         res.status(200).json(updatedCourse);
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message});
//     }
// });

// // delete a course
// app.delete ('/api/courses/id=:id', async (req, res) =>{
//     try {
//         const { id } = req.params;
//         const course = await Course.findByIdAndUpdate (id);

//         if (!course) {
//             return res.status(404).json({message: "Course not found"});
//         }

//         res.status(200).json({ message: "Course deleted."});
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message});
//     }
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })