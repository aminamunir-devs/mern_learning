import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">StudentMS</h1>

        <div className="flex gap-6">
            <NavLink
            to="/"
            className={({isActive})=>
            isActive
         ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"}>Dashboard</NavLink>

                  <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            Students
          </NavLink>

            <NavLink
            to="/students/add"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            Add Student
          </NavLink>
          </div>
          </div>
    </nav>
  )
}
