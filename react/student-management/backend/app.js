require("dotenv").config();
const cors=require("cors");

const express=require("express");
const connectDB=require("./config/db");
const studentRoutes=require("./routes/studentRoutes");
const teacherRouter=require("./routes/teacherRoutes")

const app=express();
app.use(express.json());
app.use(cors());

connectDB();
app.use(studentRoutes);
app.use(teacherRouter);e-.0

app.get("/",(req,res)=>{
    res.send("student management api")
})

const PORT=process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});