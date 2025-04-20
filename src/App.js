import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Application from "./pages/Application";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Student from "./pages/Student";
import MyProfile from "./pages/MyProfile";
import ApplyCourse from "./pages/ApplyCourse";

import Admin from "./pages/Admin";
import ManageStudent from "./pages/ManageStudent";
import ManageCourse from "./pages/ManageCourse";
import ManageApplication from "./pages/ManageApplication";

// components
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="signin" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />

                <Route path="home" element={<Home />} />
                <Route path="application" element={<Application />} />

                

                {/* Layout routes */}
                <Route element={<Layout />}>
                    {/* Student Routes */}
                    <Route path="student" element={<Student />} />
                    <Route path="student/my-profile" element={<MyProfile />} />
                    <Route path="student/apply-course" element={<ApplyCourse />} />

                    {/* Admin Routes */}
                    <Route path="admin" element={<Admin />} />
                    <Route path="admin/manage-student" element={<ManageStudent />} />
                    <Route path="admin/manage-course" element={<ManageCourse />} />
                    <Route path="admin/manage-application" element={<ManageApplication />} />
                </Route>



            </Routes>
        </Router>
    );
}

export default App;
