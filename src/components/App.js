import {Route, Switch} from "react-router-dom"
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"
import Trainers from "./Trainers"
import TrainerPage from './TrainerPage'
import Pets from './Pets'
import NewTrainerForm from "./NewTrainerForm"
import PetUpdateForm from './PetUpdateForm'
import NewPetForm from "./NewPetForm"

function App() {
  const [trainers, setTrainers] = useState([])
  const [pets, setPets] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/trainers")
    .then(res => res.json())
    .then(trainers => setTrainersAndPets(trainers))
  }, [])

  function setTrainersAndPets(trainers){
    setTrainers(trainers)
    const petCollection = []
    for (let i = 0; i < trainers.length; i++){
      trainers[i].pets.forEach(handlePet)

      function handlePet(pet){
        pet.trainerName = trainers[i].name
        petCollection.push(pet)
      }
    }
    setPets(petCollection)
  }

  function handleTrainerUpdate(updatedTrainer){
    const newTrainers = trainers.map(trainer =>{
      if(trainer.id === updatedTrainer.id){
        return updatedTrainer
      }
      else{
        return trainer
      }
    })
    setTrainersAndPets(newTrainers)
  }

  function handleTrainerCreation(newTrainer){
    const newTrainers = [...trainers, newTrainer]
    setTrainers(newTrainers)
  }

  function handlePetUpdate(updatedPet, originalTrainerId){
    const trainerToUpdate = trainers.find(trainer => trainer.id === updatedPet.trainer_id)
    updatedPet.trainerName = trainerToUpdate.name
    const trainerChange = updatedPet.trainer_id !== originalTrainerId

    setPets(pets.map(pet =>{
      if(pet.id === updatedPet.id){
        return updatedPet
      }
      else{
        return pet
      }
    }))

    setTrainers(trainers.map(updatedTrainers))

    function updatedTrainers(trainer){
      if(trainerChange){
        if (trainer.id === originalTrainerId){
          trainer.pets = trainer.pets.filter(pet => pet.id !== updatedPet.id)
          return trainer
        }
      }

      if(trainer.id === updatedPet.trainer_id){
        trainer.pets = [...trainer.pets, updatedPet]
      }
      return trainer
    }
  }

  function handlePetCreation(newPet){
    const trainerToUpdate = trainers.find(trainer => trainer.id === newPet.trainer_id)
    newPet.trainerName = trainerToUpdate.name
    trainerToUpdate.pets.push(newPet)

    setTrainers(trainers.map(trainer =>{
      if (trainer.id === trainerToUpdate.id){
        return trainerToUpdate
      }
      else{
        return trainer
      }
    }))
    setPets([...pets, newPet])
  }

  function handleTrainerDelete(id){
    setTrainers(trainers.filter(trainer => trainer.id !== id))
  }

  function handlePetDelete(deletedPet){
    setPets(pets.filter(pet => pet.id !== deletedPet.id))
    setTrainers(trainers.map(trainer =>{
      if (trainer.id === deletedPet.trainer_id){
        trainer.pets = trainer.pets.filter(pet => pet.id !== deletedPet.id)
        return trainer
      }
      else{
        return trainer
      }
    }))
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
            <h2 className="header">Homepage</h2>
            <p>Welcome to Pet-Trainer! Head on over to your list of trainers or pets to see and/or modify them!</p>
        </Route>
        <Route path="/trainers/create">
          <NewTrainerForm handlePost={handleTrainerCreation}/>
        </Route>
        <Route path="/trainers/:id">
          <TrainerPage handleUpdate={handleTrainerUpdate} handleDelete={handleTrainerDelete}/>
        </Route>
        <Route path="/trainers">
          <p>Click a trainer to see the pets they are training, edit them, or fire/delete them.</p>
          <Trainers trainers={trainers}/>
        </Route>
        <Route path="/pets/create">
          <NewPetForm trainers={trainers} handlePost={handlePetCreation}/>
        </Route>
        <Route path="/pets/:id/edit">
          <PetUpdateForm handleUpdate={handlePetUpdate} trainers={trainers}/>
        </Route>
        <Route path="/pets">
          <p>Click a Pet to edit them.</p>
          <Pets pets={pets} handleDelete={handlePetDelete}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
