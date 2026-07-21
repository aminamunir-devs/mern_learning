// import { Link } from "react-router-dom";

// export default function StudentTable({
//   students,
//   deleteStudent,
// }) {
//   return (
//     <div>
//       <h2>Student List</h2>

//       {students.map((student) => (
//         <div key={student._id}>
//           <h3>{student.name}</h3>

//           <p>Email: {student.email}</p>

//           <p>Age: {student.age}</p>

//           <Link
//             to={`/students/edit/${student._id}`}
//             className="bg-green-500 text-white px-3 py-1 rounded mr-2"
//           >
//             Edit
//           </Link>

//           <button onClick={() => deleteStudent(student._id)}>Delete</button>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }
