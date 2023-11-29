import React, { useState } from "react";
import "./css/Auth.css";
import { useNavigate } from "react-router-dom";
import axiosAuth from "../../api/axiosAuth";
import { api } from "../../api/api";

export default function Register() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signinUser = (e) => {
    e.preventDefault();
    axiosAuth
      .post(api + "/user/signup", user)
      .then((res) => {
        alert("You are registered, now you have to login !!!");
        navigate("/login");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="auth">
      <div className="auth--auth">
        <div className="auth--left"></div>
        <div className="auth--right">
          <h1 className="auth--title">Register</h1>
          <form onSubmit={signinUser}>
            <div className="username">
              <label className="username--label">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <div className="password">
              <label className="password--label">Password</label>
              <input
                type="text"
                placeholder="Enter your password"
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <div className="button">
              <button>Sign Up</button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
