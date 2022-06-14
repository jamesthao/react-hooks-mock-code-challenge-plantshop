import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants]=useState([]);
  const[searchValue, setSearchValue]=useState("");

  useEffect (()=>{
    fetch('http://localhost:6001/plants')
    .then((res)=>res.json())
    .then((data)=>setPlants(data))
  }, [])

  function onFormSubmit(newPlantObj){
    fetch('http://localhost:6001/plants', {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(newPlantObj)
    })
    .then((res)=>res.json())
    .then((data)=>setPlants([...plants, data]))
  };

  function handleUpdate(updatedData){
    fetch(`http://localhost:6001/plants/${updatedData.id}`, {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify({...updatedData})
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      let updatedList = plants.map((plant)=>{
        if (updatedData.id===plant.id) {
          return (updatedData)
        } else {
          return plant
        }
      })
      setPlants(updatedList)
    })
  }

  function handleSearchChange (newSearchValue){
    setSearchValue(newSearchValue);
  };

  const plantsToDisplay = plants.filter(plant=>plant.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search onSearchChange={handleSearchChange} search={searchValue} />
      <PlantList plants={plantsToDisplay} handleUpdate={handleUpdate} />
    </main>
  );
}

export default PlantPage;
