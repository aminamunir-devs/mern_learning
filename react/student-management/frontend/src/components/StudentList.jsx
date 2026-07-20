

export default function StudentList({students,setEditingStudent,deleteStudent})

return (
    <div>
        <h2>Student List</h2>
        {
            students.map((student)=>(
                <div key={student._id}>
                    <h3>{student.name}</h3>
                    <p>Email:{student.email}
                    </p>
                    <p>Age:{student.age}</p>
                    <button onClick={()=>setEditingStudent(student)}>Edit</button>
                   <button
    onClick={() => deleteStudent(student._id)}
>
    Delete
</button>
                    <hr/>
                    
                </div>

            ))
        }
      
    </div>
  );
};

