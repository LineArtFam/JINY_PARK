
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App({name, setName, age, setAge, country, setCountry, position, setPosition, wage, setWage, employeeList, setEmployeeList}) {

  const addEmployee = () => {
    axios
      .post("http://localhost:4000/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  };

  const getEmployeeList = () => {
    axios.get("http://localhost:4000/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
      <div className="App">
        <h1>Hello App</h1>
        <div className="information">
          <label>Name : </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>Age : </label>
          <input type="text" onChange={(e) => setAge(e.target.value)} />
          <label>Country : </label>
          <input type="text" onChange={(e) => setCountry(e.target.value)} />
          <label>Position : </label>
          <input type="text" onChange={(e) => setPosition(e.target.value)} />
          <label>Wage (year) : </label>
          <input type="text" onChange={(e) => setWage(e.target.value)} />
          <button onClick={addEmployee}>Add Employee</button>
        </div>
        <hr />
        <Link to="/list" className="showlink" onClick={getEmployeeList}>
          Show employees
        </Link>
      </div>
  );
}

export default App;
