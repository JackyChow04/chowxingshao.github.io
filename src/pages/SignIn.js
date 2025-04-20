import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Button from "../components/Button";
import Input from "../components/Input";

//css
import '../style/Splash.css';

//icons
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { VscError } from "react-icons/vsc";


const SignInPage = () => {
    const navigate = useNavigate();

    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    // Load stored login ID and password if "Remember Me" was previously checked
    useEffect(() => {
        const storedLoginId = localStorage.getItem("rememberedLoginId");
        const storedPassword = localStorage.getItem("rememberedPassword");
        const storedRememberMe = localStorage.getItem("rememberMe");

        if (storedRememberMe === "true" && storedLoginId && storedPassword) {
            setLoginId(storedLoginId);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = async () => {
        if (!loginId || !password) {
            setError("Please enter both Login ID and Password");
            return;
        }

    };

    return (
        <div className="splash-page">
            <div className="splash-container">
                <h2 className="splash-title">Sign In</h2>
                <p className="splash-sub-title body-3-bold">Hey, welcome back to tarumt</p>
                <div className="input">
                    <Input

                        type="text"
                        placeholder="Login ID"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                    />

                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        state={error ? "error" : ""}
                        icon={showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        iconPosition="right"
                        helperText={error}
                        helperIcon={error && <VscError />}
                        onIconClick={() => setShowPassword(!showPassword)}
                    />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        /> Remember me
                    </label>
                    <a href="/forgot-password" className="forgot-password"  >Forgot Password?</a>
                </div>

                <Button variant="primary" size="large" width="100%" onClick={handleLogin}>
                    Sign In
                </Button>

                <div className="sign-in-up">
                    Don't have an account? <a href="/signup" >Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
