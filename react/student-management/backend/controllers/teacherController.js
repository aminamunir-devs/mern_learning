const Teacher=require("../models/Teacher");

const signupTeacher=async (req,res)=>{
    try{
        const {name,email,password}=req.body;

        const existingTeacher=await Teacher.find({email});
        if(existingTeacher){
            return res.status(400).json({
                message:"Teacher already exist",
            })
        }
        const teacher=await Teacher.create({
            name,
            email,
            password,
        });
        res.json(201).json(teacher);

    }
    catch(error){
        res.status(500).json({
            message:error,message,
        })
    }
}
module.exports={
    signupTeacher,
};