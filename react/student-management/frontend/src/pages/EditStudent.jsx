import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/studentApi";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
      name,
      email,
      age,
    };
    await API.put(`/students/${id}`, student);
    navigate("/students");
  };

  const fetchStudent = async () => {
    const response = await API.get(`/students/${id}`);

    setName(response.data.name);
    setEmail(response.data.email);
    setAge(response.data.age);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Student</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Age</label>

            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
          >
            Update Student
          </button>
        </form>
      </div>
    </Layout>
  );
}
