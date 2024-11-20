const express = require('express');
const studentRouter = express.Router (); // this router will be our interface

const {getStudents, getStudent, createStudent, updateStudent, deleteStudent, getStudentById, updateStudentById, deleteStudentById} = require ("../controllers/student.controller.js");

studentRouter.get ('/', getStudents);
studentRouter.get ('/id=:id', getStudent);
studentRouter.post ('/', createStudent);
studentRouter.put ('/id=:id', updateStudent);
studentRouter.delete ('/id=:id', deleteStudent);
studentRouter.get ('/studentId=:studentId', getStudentById);
studentRouter.put ('/studentId=:studentId', updateStudentById);
studentRouter.delete ('/studentId=:studentId', deleteStudentById);

module.exports = studentRouter;