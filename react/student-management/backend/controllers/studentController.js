const Student = require("../models/Student");


const getStudent=async (req,res)=>{
    const students=await Student.find();
    res.json(students);
};

const createStudent=async (req,res)=>{
    const {name, email ,age}=req.body;
    const student=await Student.create({
        name,
        email,
        age
    });
    res.status(201).json(student);
}

const updateStudent=async (req, res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body;
    const student=await Student.findByIdAndUpdate({
        name,
        email,
        age
    },
{
    new:true,
    runValidators:true
})
res.json(student);
}

const deleteStudent=async(req,res)=>{
    const {id}=req.params;
    const student=await Student.findByIdAndDelete(id);
    if(!student){
        res.status(404).json({
            message:"students not found"
        })
    }
    res.json({
        message:"student delete successfully"
    })
}

module.exports={
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
};