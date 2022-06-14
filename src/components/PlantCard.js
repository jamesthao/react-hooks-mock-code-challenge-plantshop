import React, { useState } from "react";
import EditPlant from "./EditPlant";

function PlantCard({ plant, handleUpdate }) {
  const[inStock, setInStock]=useState(true);
  const[editMode, setEditMode]=useState(false);


function onSaveUpdate(e){
  console.log(e.target)
}

function toggleEdit (){
  setEditMode(!editMode)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      {editMode? <EditPlant plant={plant} onSaveClick={onSaveUpdate} handleUpdate={handleUpdate} toggleEdit={toggleEdit} />: 
      <>
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="edit" onClick={toggleEdit}>Edit Plant</button>
      </>}
      {inStock ? (
        <button className="primary" onClick={()=>{setInStock(!inStock)}}>In Stock</button>
      ) : (
        <button onClick={()=>{setInStock(!inStock)}}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
