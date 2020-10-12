import React, { useContext, useRef, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Employee.css";
import { useHistory, useParams } from "react-router-dom";

export const EmployeeForm = props => {
  const { addEmployee, getEmployeeById, updateEmployee } = useContext(
    EmployeeContext
  );
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const { employeeId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = event => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newEmployee = { ...employee };
    //employee is an object with properties.
    //set the property to the new value
    newEmployee[event.target.name] = event.target.value;
    //update state
    setEmployee(newEmployee);
  };

  const name = useRef(null);
  const location = useRef(null);

  // Get customers and locations. If animalId is in the URL, getAnimalById
  useEffect(() => {
    getLocations().then(() => {
      if (employeeId) {
        getEmployeeById(employeeId).then(employee => {
          setEmployee(employee);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const constructEmployeeObject = () => {
    if (parseInt(employee.locationId) === 0) {
      window.alert("Please select a location");
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (employeeId) {
        //PUT - update
        updateEmployee({
          id: employee.id,
          name: employee.name,
          locationId: parseInt(employee.locationId)
        }).then(() => history.push(`/employees/detail/${employee.id}`));
      } else {
        //POST - add
        addEmployee({
          name: employee.name,
          locationId: parseInt(employee.locationId)
        }).then(() => history.push("/employees"));
      }
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">
        {employeeId ? `Edit ${employee.name}` : "Add New Employee"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input
            type="text"
            id="employeeName"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
            onChange={handleControlledInputChange}
            defaultValue={employee.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            value={employee.locationId}
            name="locationId"
            id="employeeLocation"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
          event.preventDefault(); // Prevent browser from submitting the form
          constructEmployeeObject();
        }}
      >
        {employeeId ? "Save Employee" : "Add Employee"}
      </button>
    </form>
  );
};
