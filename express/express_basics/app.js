// const express=require("express");
// const app=express();

// // third part /specific route

// // build-in middlewere
// app.use(express.json());

// // custom middlewere

// const logger = require("./middleware/logger");

// app.use(logger);

// const PORT=5000;

// // static routing

// app.get("/",(req,res)=>
// {
//   res.send("Welcome to Express Basics!")
// })

// app.get("/about",(req,res)=>
// {
//   res.send("you are in about page ")
// })

// app.get("/contact",(req,res)=>{
//   res.send("you are in contact page ")
// })

// app.get("/services",(req,res)=>
// {
//   res.send("you are in services pages")
// })
 
// // post request using build-in middleware

// app.post("/student",(req,res)=>
// {
//   console.log(req.body);

//   res.send("data recieved succesfully");
// })

// // or

// app.post("/student",(req,res)=>
// {
//   res.json({
//     message:"data recieved successfully",
//     data:req.body
//   })
// })

// // dynamic URL parameters /routing

// app.get("/user/:id",(req,res)=>
// {
//   res.send(`user id is :${req.params.id}`)
// })

// // Query Parameters

// app.get("/book",(req,res)=>
// {
//   res.send(`book is ${req.query.name}`)
// })

// // third part /specific route
// app.get("/profile", auth, (req, res) => {
//     res.send("User Profile");
// });

// // running server

// app.listen(PORT,()=>
// {
//   console.log(`server is running on http://localhost:${PORT}`)
// })



const express = require("express");
const dotenv = require("dotenv");

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();

app.use(express.json());

// Logger Middleware
app.use(logger);

// Student Routes
app.use(studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});