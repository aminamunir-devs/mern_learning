import Layout from "../components/Layout"
import { useState } from "react";
import API from "../api/studentApi";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {

    const navigate=useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [age ,setAge]=useState("");

const handleSubmit=async(e)=>{
    e.preventDefault();

    const student={
        name,
        email,
        age
    };
    await API.post("/students",student);
    navigate("/students");
}

    return(
 <Layout>
        <div className="max-w-xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">
                    Add Student
                </h1>
                <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6"
                >

                    <div className="mb-4"> 
                          <label className="block mb-2 font-medium">
                            Name
                        </label>
                         <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full border rounded-lg p-3"
                        placeholder="Enter name"
                        />

                    </div>
                      <div className="mb-4">

                        <label className="block mb-2 font-medium">
                            Email
                        </label>


                        <input
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full border rounded-lg p-3"
                        placeholder="Enter email"
                        />

                    </div>
                          <div className="mb-4">

                        <label className="block mb-2 font-medium">
                            Age
                        </label>


                        <input
                        type="number"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                        className="w-full border rounded-lg p-3"
                        placeholder="Enter age"
                        />

                    </div>
                     <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                    >

                        Save Student

                    </button>

                </form>
        </div>
     </Layout>
     );
  
}
