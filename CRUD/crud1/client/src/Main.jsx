import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import "./pages/App.css";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [user, setUser] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  return (
    <BrowserRouter>
      <h1>CRUD APP</h1>
      <h2>어서오세요 {user ? `${user} 님` : null}</h2>
      <div className="header">
        <Link to="/" className="link">
          메인
        </Link>
        <Link to="/app" className="link">
          작성
        </Link>
        <Link to="/list">보기</Link>
        {user === "" ? (
          <Link to="/login">로그인</Link>
        ) : (
          <Link to="/" onClick={() => setUser("")}>
            로그아웃
          </Link>
        )}
        {user ? null : <Link to="/register">회원가입</Link>}
      </div>
      <Switch>
        <Route exact path="/">
          <main className="main">
            <h2>메인 페이지입니다</h2>
            <p>드루와</p>
          </main>
        </Route>
        <Route path="/app">
          <App
            employeeList={employeeList}
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            country={country}
            setCountry={setCountry}
            position={position}
            setPosition={setPosition}
            wage={wage}
            setWage={setWage}
            setEmployeeList={setEmployeeList}
          />
        </Route>
        <Route path="/list">
          <List employeeList={employeeList} setEmployeeList={setEmployeeList} />
        </Route>
        <Route path="/login">
          <Login
            user={user}
            setUser={setUser}
            usernameReg={usernameReg}
            passwordReg={passwordReg}
            setUsernameReg={setUsernameReg}
            setPasswordReg={setPasswordReg}
          />
        </Route>
        <Route path="/register">
          <Register
            usernameReg={usernameReg}
            passwordReg={passwordReg}
            setUsernameReg={setUsernameReg}
            setPasswordReg={setPasswordReg}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
