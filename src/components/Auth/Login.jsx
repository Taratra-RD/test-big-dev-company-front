import React, { useState } from "react";
import "./css/Auth.css";
import { useNavigate } from "react-router-dom";
import axiosAuth from "../../api/axiosAuth";
import { api } from "../../api/api";

export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signinUser = (e) => {
    e.preventDefault();
    axiosAuth
      .post(api + "/user/signin", user)
      .then((res) => {
        setError("");
        if (res.data.Login) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("access_token", res.data.accessToken);
          navigate("/");
        } else {
          navigate("/login");
        }
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
          <h1 className="auth--title">Login</h1>
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
              <button>Sign In</button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
