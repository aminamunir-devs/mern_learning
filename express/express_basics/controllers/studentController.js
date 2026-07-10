const students = require("../data/students");

// GET All Students
const getAllStudents = (req, res) => {
    res.json(students);
};

// GET Student By ID
const getStudentById = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    console.log("Student Found:", student);

    res.json(student);
};

// POST Student
const createStudent = (req, res) => {
    const { name, age, course } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        course,
    };

    students.push(newStudent);

    console.log("Student Added:", newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent,
    });
};

// PUT Student
const updateStudent = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    const { name, age, course } = req.body;

    student.name = name;
    student.age = age;
    student.course = course;

    console.log("Student Updated:", student);

    res.json({
        message: "Student updated successfully",
        student,
    });
};

// DELETE Student
const deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((student) => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    const deletedStudent = students.splice(index, 1);

    console.log("Student Deleted:", deletedStudent[0]);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0],
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};