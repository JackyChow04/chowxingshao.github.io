import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// css
import "../style/MasterPage.css";

// icons
import { FaUndo, FaClock } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdAssignment } from "react-icons/md";
import { BiSolidTruck } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";


const Sidebar = () => {
    const [username, setUsername] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve the username from localStorage when the component mounts
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        if (user && user.userName) {
            setUsername(user.userName);
        } else {
            setUsername("Guest"); // Fallback if no user is logged in
        }
    }, []);

    const handleLogout = async (event) => {
        localStorage.removeItem("loggedInUser");
        navigate("/signin");
    };

    return (
        <div className="sidebar">
             {/*Sidebar Header */}
            <div className="sidebar-header nav">
                <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
                    <BsCodeSquare className="header body-1-bold" /> <span>TARUMT</span>
                </Link>
                <Link to="/student/my-profile" className={location.pathname === "/" ? "active-link" : ""}>
                    <CgProfile className="header body-1-bold" /> <span>{username}</span>
                </Link>
            </div>

            <div className="line"></div>

             {/*Pages Navigation */}
            <div className="sidebar-nav">
                <div className="nav-section nav">
                    <Link to="student/apply-course" className={location.pathname === "/apply-course" ? "active-link" : ""}>
                        <FaClock className="icon" /> <span>Course</span>
                    </Link>

                    <Link to="student/apply-scholarship" className={location.pathname === "/apply-scholarship" ? "active-link" : ""}>
                        <FaClock className="icon" /> <span>Scholarship</span>
                    </Link>
                </div>
            </div>

             {/*Help & Logout at the bottom */}
            <div className="sidebar-footer nav">
                <Link to="/signin" style={{ color: "var(--error)" }} onClick={handleLogout} className={location.pathname === "/signin" ? "active-link" : ""}>
                    <LuLogOut className="icon" /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
