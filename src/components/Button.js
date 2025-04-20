import React from "react";
import "../style/Button.css"


//css
import "../style/Button.css";

const Button = ({ variant, size, disabled, icon, iconPosition, iconColor, children, width, onClick }) => {
    return (
        <button
            className={`btn ${variant} ${size} ${disabled ? "disabled" : ""}`}
            disabled={disabled}
            style={{ width: width }}
            onClick={onClick} // Add onClick function here
        >
            {variant === "icon-only" ? (
                <span className="icon" style={{ color: iconColor }}>{icon}</span>
            ) : (
                <>
                    {icon && iconPosition === "left" && <span className="icon" style={{ color: iconColor }}>{icon}</span>}
                    <span className="label">{children}</span>
                    {icon && iconPosition === "right" && <span className="icon" style={{ color: iconColor }}>{icon}</span>}
                </>
            )}
        </button>
    );
};


export default Button;