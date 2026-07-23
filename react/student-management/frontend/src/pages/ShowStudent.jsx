import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import API from "../api/studentApi";
import { useParams, useNavigate } from "react-router-dom";

export default function ShowStudent() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [student, setStudent] = useState(null);

  const fetchStudent = async () => {
    const response = await API.get(`/students/${id}`);
    setStudent(response.data);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  if (!student) {
    return (
      <Layout>
        <h2 className="text-xl">Loading...</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Student Details
          </h1>

          <div className="space-y-5">
            <div className="border-b pb-3">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-xl font-semibold">{student.name}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-xl">{student.email}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Age</p>
              <p className="text-xl">{student.age} Years</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => navigate(`/students/edit/${student._id}`)}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Edit
            </button>

            <button
              onClick={() => navigate("/students")}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
