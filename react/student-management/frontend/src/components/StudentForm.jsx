import { useState,useEffect } from "react";
import API from "../api/studentApi";


export default function StudentForm({onStudentAdded,editingStudent,setEditingStudent}) {

    const [name, setName]=useState("");
    const [email ,setEmail]=useState("");
    const [age ,setAge]=useState("");

    const handleSubmit=async (event)=>{
        event.preventDefault();
        const student={
            name,
            email,
            age,
        }
        if(editingStudent){

            await API.put(`/students/${editingStudent._id},student`);
        }
        else{

        await API.post("/students",student);
        }
        onStudentAdded();
        setEditingStudent(null);
        
        setName("");
        setEmail("");
        setAge("")

       
    }
     useEffect(()=>{
            if(editingStudent){
            setName(editingStudent.name);
            setEmail(editingStudent.email);
            setAge(editingStudent.age);
        }},[editingStudent]);

  return (
    <div>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <br/><br/>

            <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>

 <br/><br/>

            <input 
            type="number"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />         

             <br/><br/>

            <button type="submit">Add Student</button>  
        </form>
    </div>
  )
}
