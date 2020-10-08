import React from "react";

import { Route } from "react-router-dom";

import { Home } from "./Home";

import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalList } from "./animal/AnimalList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalSearch } from "./animal/AnimalSearch";

import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeDetail } from "./employee/EmployeeDetail";

import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";

import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from ".//location/LocationList";

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
          <AnimalSearch />
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

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals/edit/:animalId(\d+)">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
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

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>

      <EmployeeProvider>
        <Route exact path="/employees/detail/:employeeId(\d+)">
          <EmployeeDetail />
        </Route>
      </EmployeeProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route path="/employees/edit/:employeeId(\d+)">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
