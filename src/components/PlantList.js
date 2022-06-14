import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onFormSubmit, handleUpdate }) {
  return (
    <ul className="cards">{plants.map((plant)=>{return <PlantCard key ={plant.id} plant={plant} onFormSubmit={onFormSubmit} handleUpdate={handleUpdate} />})}</ul>
  );
}

export default PlantList;
