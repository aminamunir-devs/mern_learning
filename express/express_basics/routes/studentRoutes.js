const express = require("express");
const router = express.Router();

const {
    getAllStudents,
} = require("../controllers/studentController");

router.get("/students", getAllStudents);

module.exports = router;