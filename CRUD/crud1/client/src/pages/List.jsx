import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const List = ({ employeeList, setEmployeeList }) => {
  useEffect(() => {
    const showEmployeeList = () => {
      axios.get("http://localhost:4000/employees").then((response) => {
        setEmployeeList(response.data);
      });
    };
    showEmployeeList();
  }, [setEmployeeList]);
  return (
    <div className="employees">
      <div className="show">
        {employeeList.map((value, key) => {
          return (
            <div className="employee" key={value.name}>
              <h3>Name : {value.name}</h3>
              <h3>Age : {value.age}</h3>
              <h3>Country : {value.country}</h3>
              <h3>Position : {value.position}</h3>
              <h3>Wage : {value.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
