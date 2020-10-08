import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationProvider } from "./location/LocationProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from ".//location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = props => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals">
          <h2>Animals</h2>
          <AnimalList />
        </Route>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <AnimalProvider>
        <Route exact path="/animals/detail/:animalId(\d+)">
          <AnimalDetail />
        </Route>
      </AnimalProvider>

      {/* Render the animal list when http://localhost:3000/location */}

      <LocationProvider>
        <Route path="/locations">
          <h2>Locations</h2>
          <LocationList />
        </Route>
      </LocationProvider>
      {/* Render the animal list when http://localhost:3000/customers */}

      <CustomerProvider>
        <Route path="/customers">
          <h2>Customers</h2>
          <CustomerList />
        </Route>
      </CustomerProvider>
      {/* Render the animal list when http://localhost:3000/employees */}

      <EmployeeProvider>
        <Route exact path="/employees">
          <h2>Employees</h2>
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      <AnimalProvider>
        <LocationProvider>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </AnimalProvider>
    </>
  );
};
