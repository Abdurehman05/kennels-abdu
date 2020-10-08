import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useParams, useHistory } from "react-router-dom";

export const EmployeeDetail = () => {
  const { getEmployeeById, releaseEmployee } = useContext(EmployeeContext);

  const [location, setLocation] = useState({});
  const [employee, setEmployee] = useState({});

  const { employeelId } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", employeelId);
    getEmployeeById(employeelId).then(response => {
      setEmployee(response.employee);
      setLocation(response.location);
    });
  }, []);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location Name: {location.name}</div>
      <div className="employee__location">
        Location Address:{location.address}
      </div>
      <button
        onClick={() => {
          releaseEmployee(animal.id).then(() => {
            history.push("/employees");
          });
        }}
      >
        Release Employee
      </button>
    </section>
  );
};
