const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
  name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true,
    }
});
const student=mongoose.model("student",studentSchema);
module.exports=student;


