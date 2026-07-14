require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const User = require("./models/User");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");

const app=express();


app.use(express.json());


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.log("database connection error");
    console.log(error.message);
})

app.get("/", (req, res) => {
  res.send("Server is working");
});

//route

app.post("/signup",async(req ,res)=>{
    const {email,password}=req.body;

const hashedPassword = await bcrypt.hash(password, 10);

const newUser = await User.create({
    email:email,
    password:hashedPassword,
})
const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    message: "User already exists",
  });
}


console.log(newUser);

    res.json({
        message:"data recieved",
    })
})

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: existingUser._id,
      email: existingUser.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.json({
    message: "Login successful",
    token,
  });
});

app.listen(process.env.PORT,()=>
{
    console.log(`server running on port ${process.env.PORT}`)
});