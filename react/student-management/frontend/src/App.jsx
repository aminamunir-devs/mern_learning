

 import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import ShowStudent from "./pages/ShowStudent";


import { Routes,Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/add" element={<AddStudent />} />
      <Route path="/students/edit/:id" element={<EditStudent />} />
      <Route path="/students/show/:id" element={<ShowStudent/>}/>
    </Routes>
  );
}
