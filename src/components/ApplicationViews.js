import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
// import { AnimalCard } from "./animal/AnimalCard";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { LocationCard } from "./location/LocationCard";
// import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";

export const ApplicationViews = props => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/locations */}
      <AnimalProvider>
        <Route path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>
      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/locations">
        <LocationCard />
        <LocationCard />
      </Route>
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
