//Overall layout of all pages (Master Page)


import { Outlet } from "react-router-dom";
import React from "react";

//components
import Sidebar from "../components/Sidebar";

//css
import "../style/MasterPage.css"

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content-wrapper">
                <div className="main-content">
                    <Outlet /> {/* Page content will be rendered here */}
                </div>
            </div>
        </div>
    );
};

export default Layout;

