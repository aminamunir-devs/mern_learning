const express=require("express");
const cors=require("cors");

const app=express();
const PORT=5000;

// Enable CORS
app.use(cors());

app.get("/students",(req,res)=>{
  res.json(
    [
      {id:1,name:"amina"},
      {id:2,name:"maham"}
    ]
  )
})

app.listen(PORT,()=>
{
  console.log(`Server is running on http://localhost:${PORT}`)
})