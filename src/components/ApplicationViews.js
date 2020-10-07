import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationProvider } from "./location/LocationProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from ".//location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";
import { AnimalForm } from "./animal/AnimalForm";

// import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";

export const ApplicationViews = props => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route path="/animals">
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
        <Route path="/employees">
          <h2>Employees</h2>
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  );
};
