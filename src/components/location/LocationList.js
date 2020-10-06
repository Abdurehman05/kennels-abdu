import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  return (
    <div className="locatons">
      {console.log("LocationList: Render")}
      {locations.map(location => {
        return (
          <LocationCard
            key={location.id}
            name={location.name}
            address={location.address}
          />
        );
      })}
    </div>
  );
};
