import React, { useState, createContext } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = createContext();

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = props => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
      .then(res => res.json())
      .then(setEmployees);
  };

  const addEmployee = employeeObj => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
    }).then(getEmployees);
  };

  const getEmployeeById = id => {
    return fetch(
      `http://localhost:8088/employees/${id}?_expand=location`
    ).then(res => res.json());
  };

  const releaseEmployee = employeeId => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
      method: "DELETE"
    }).then(getEmployees);
  };
  const updateEmployee = employee => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    });
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
        getEmployeeById,
        updateEmployee,
        releaseEmployee
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
