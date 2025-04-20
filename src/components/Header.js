import React from "react";

//css
import "../style/MasterPage.css";

//components
import BackButton from "../components/BackButton";

//icons

const Header = ({
    pageName,
    back = "false",
}) => {


    return (
        <div className="header">
            <h3 className="header-content">
                <span className="page-title">
                    {pageName}
                </span>

                {back === "true" && <div><BackButton /></div>}
            </h3>

        </div>
    );
};

export default Header;
