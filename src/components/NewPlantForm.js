import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const[formData, setFormData]=useState({
    name:"",
    image:"",
    price:""
  });

  function handleFormSubmit (e) {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      name:"",
      image:"",
      price:""
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=>handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value,})}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value,})} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={(e)=>setFormData({...formData, [e.target.name]:e.target.value,})} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
