const Student = require("../models/Student");


const getStudent=async (req,res)=>{
    const students=await Student.find();
    res.json(students);
};

const getStudentById = async (req, res) => {
    console.log("===== GET STUDENT BY ID =====");
    console.log("Requested ID:", req.params.id);

    const student = await Student.findById(req.params.id);

    console.log("Student:", student);

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    }

    res.json(student);
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

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        console.log("ID:", id);
        console.log("BODY:", req.body);

        const student = await Student.findByIdAndUpdate(
            id,
            {
                name,
                email,
                age,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        console.log("UPDATED:", student);

        res.json(student);
    } catch (error) {
        console.error("UPDATE ERROR:", error);
        res.status(500).json({
            message: error.message,
        });
    }
};

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
    getStudentById,
};