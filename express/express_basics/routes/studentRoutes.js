const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../controllers/studentController");

// GET All Students
router.get("/students", getAllStudents);

// GET Student By ID
router.get("/students/:id", getStudentById);

// POST Student
router.post("/students", createStudent);

// PUT Student
router.put("/students/:id", updateStudent);

// DELETE Student
router.delete("/students/:id", deleteStudent);

module.exports = router;