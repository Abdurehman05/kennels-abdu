import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalSearch = () => {
  const { setSearchTerms, getAnimals } = useContext(AnimalContext);

  useEffect(() => {
    setSearchTerms("");
    getAnimals();
  }, []);

  return (
    <>
      <h3>Search animal :</h3>
      <input
        type="text"
        className="input--wide"
        onKeyUp={keyEvent => setSearchTerms(keyEvent.target.value)}
        placeholder="Search for an animal... "
      />
    </>
  );
};
