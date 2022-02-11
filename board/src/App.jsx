import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/board">
            <Board></Board>
          </Route>

          <Route path="/login">
            <Login login={login} />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
