import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Login = ({
  user,
  setUser,
  passwordReg,
  usernameReg,
  setUsernameReg,
  setPasswordReg,
}) => {
  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => setUser(response.data[0].username));
  };
  return (
    <div className="container">
      <div className="forms">
        <h1>로그인</h1>
        <label htmlFor="">아이디</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label htmlFor="">패스워드</label>
        <input
          type="password"
          onChange={(e) => setPasswordReg(e.target.value)}
        />
        <Link to="/app" onClick={handleLogin}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Login;
