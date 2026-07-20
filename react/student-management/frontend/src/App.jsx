import StudentForm from "./components/StudentForm"
import StudentList from "./components/StudentList";
import API from "./api/studentApi";

import { useState ,useEffect} from "react";



export default function App() {

  const [students ,setStudents]=useState([]);
  const [editingStudent,setEditingStudent]=useState(null);

  const fetchStudents=async()=>{
    const response=await API.get("/students")
    setStudents(response.data);
}
useEffect(()=>{
    fetchStudents();
},[])

const deleteStudent=async(id)=>{
  await API.delete(`/students/${id}`);
  fetchStudents();
}

  return (
    <div>
      <StudentForm onStudentAdded={fetchStudents}
      editingStudent={editingStudent}
      setEditingStudent={setEditingStudent}/>
      <StudentList students={students}
      setEditingStudent={setEditingStudent}
      deleteStudent={deleteStudent}/>
    </div>
  )
}
