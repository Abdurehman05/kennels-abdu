import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from ".//location/LocationList";

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
          <AnimalList />
        </Route>
      </AnimalProvider>
      {/* Render the animal list when http://localhost:3000/location */}
      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
      {/* Render the animal list when http://localhost:3000/customers */}
      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
      {/* Render the animal list when http://localhost:3000/employees */}
      <Route path="/employees">
        <EmployeeCard />
        <EmployeeCard />
      </Route>
    </>
  );
};
