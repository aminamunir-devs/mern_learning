const express=require("express");
const {signupTeacher}=require("../controllers/teacherController")

const router=express.Router();

router.post("/teachers/signup",signupTeacher);

module.exports=router;