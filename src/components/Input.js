import React, { useState } from "react";

//Icons
import { VscError, VscCheck } from "react-icons/vsc";

//Input
import "../style/Input.css";


const Input = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
    icon,
    iconPosition = "right",
    onIconClick,
    onKeyDown,
    label,
    state = "default", // "default", "error", "success", "loading", "warning"
    helperText = "",
    width = "100%",
}) => {

    const [isFocused, setIsFocused] = useState(false); // Track focus state
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    // Determine the actual state (change to "focused" or "hovered" dynamically)
    const actualState = isFocused ? "focused" : isHovered ? "hovered" : state;

    // Auto-select icon based on state
    const getHelperIcon = () => {
        if (state === "error") return <VscError />;
        if (state === "success") return <VscCheck />;
        return null;
    };

    return (
        <div className={`input-wrapper ${actualState}`} style={{ width }}>
            {label && <label className="input-label">{label}</label>}

            <div
                className={`input-container ${icon ? `icon-${iconPosition}` : ""}`}
                onMouseEnter={() => setIsHovered(true)}  // Set hover state
                onMouseLeave={() => setIsHovered(false)} // Remove hover state
            >
                {icon && iconPosition === "left" && <span className="input-icon">{icon}</span>}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}  // Set focus state
                    onBlur={() => setIsFocused(false)}  // Reset focus state
                    disabled={disabled}
                    className="input-field"
                />
                {icon && iconPosition === "right" && <span className="input-icon" onClick={onIconClick}>{icon}</span>}
            </div>

            {/* Show helper text with an icon for specific states */}
            {state !== "default" && !disabled && helperText && (
                <p className={`helper-text ${actualState}`}>
                    {getHelperIcon() && <span className="helper-icon">{getHelperIcon()}</span>}
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default Input;
