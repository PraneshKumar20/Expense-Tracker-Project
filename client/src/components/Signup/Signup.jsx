import React, { useState } from "react";
import "./Signup.css";
import axios from "../../api/axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async(e) =>{
        e.preventDefault();

        if(password!==confirmPassword){
            alert("Password do not match");
            return;
        }

        try{
            const response = await axios.post("/auth/signup",{
                name, email, password
            });
            alert(response.data.message);
            navigate("/login");

        } catch(error){
            alert(error.response?.data?.message || "Signup failed");
        }
    } 

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Create Account</h2>
                <p className="signup-subtitle">Sign up to get started</p>

                <form className="signup-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            className="form-input"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    <button className="submit-btn" type="submit">
                        Sign Up
                    </button>

                    <p className="form-footer">
                        Already have an account?{" "}
                        <span
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;