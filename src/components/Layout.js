import { Outlet } from "react-router-dom";
import React from "react";

// components
import AdminSidebar from "../components/AdminSidebar";
import StudentSidebar from "../components/StudentSidebar";

// css
import "../style/MasterPage.css";

// expect props like: <Layout role="admin" /> or <Layout role="student" />
const Layout = ({ role }) => {
    return (
        <div className="layout">
            {role === "admin" ? <AdminSidebar /> : <StudentSidebar />}
            <div className="main-content-wrapper">
                <div className="main-content">
                    <Outlet /> {/* Page content will be rendered here */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
