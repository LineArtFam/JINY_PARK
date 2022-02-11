import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Register = ({
  passwordReg,
  usernameReg,
  setUsernameReg,
  setPasswordReg,
}) => {
  const newReg = () => {
    axios
      .post("http://localhost:4000/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then(() => alert("회원가입이 완료되었습니다."))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="forms">
        <h1>회원가입</h1>
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
        <Link to="/login" onClick={newReg}>
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Register;
