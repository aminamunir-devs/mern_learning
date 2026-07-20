const express=require("express");
const {getStudent,createStudent,updateStudent,deleteStudent}=require("../controllers/studentController")

const router=express.Router();

router.get("/students",getStudent);
router.post("/students",createStudent);
router.put("/students/:id",updateStudent);
router.delete("/students/:id",deleteStudent)

module.exports=router;