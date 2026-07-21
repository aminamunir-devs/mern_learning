import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import API from "../api/studentApi";
import { useNavigate } from "react-router-dom";

export default function Students() {

const navigate=useNavigate();

  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await API.get("/students");
    setStudents(response.data);
  };

const deleteStudent = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this student?"
  );

  if (!confirmDelete) {
    return;
  }

  await API.delete(`/students/${id}`);
  fetchStudents();
};

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <button
  onClick={() => navigate("/students/add")}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  Add Student
</button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Student List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Age</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="border p-3">{student.name}</td>
                <td className="border p-3">{student.email}</td>

                <td className="border p-3">{student.age}</td>
                <td className="border p-3">
     <button
  onClick={() => {
    console.log(student);
    navigate(`/students/edit/${student._id}`);
  }}
  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
>
  Edit
</button>

                  <button
  onClick={() => deleteStudent(student._id)}
  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
>
  Delete
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
