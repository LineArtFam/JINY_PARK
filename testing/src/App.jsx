import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Write from "./pages/Write";
import View from "./pages/View";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>

          <Route path="/write">
            <Write />
          </Route>

          <Route path="/view">
            <View />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
