import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate=useNavigate();
  return (
    <Layout>
    <h1 className="text-3xl font-bold">Dashboard</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">
          Welcome 👋
        </h2>
        <p className="text-gray-600 mb-6">
          Manage your students using the dashboard.
        </p>
        <div className="flex gap-4">
            <button
            onClick={() => navigate("/students")}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            View Students
          </button>

          <button
            onClick={() => navigate("/students/add")}
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
          >
            Add Student
          </button>

        </div>


    </div>
    </Layout>
  )
}
