import {Route, Switch} from "react-router-dom"
import {useState, useEffect} from 'react'
import NavBar from "./NavBar"
import Trainers from "./Trainers"
import Pets from './Pets'

function App() {
  const [trainers, setTrainers] = useState([])
  const [pets, setPets] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/trainers")
    .then(res => res.json())
    .then(trainerArray => setTrainers(trainerArray))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:9292/pets")
    .then(res => res.json())
    .then(petArray => setPets(petArray))
  }, [])

console.log(trainers) //Delete later as well as the next line
console.log(pets)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h2 className="header">Homepage</h2>
          <p>Placeholder text for nyaow.</p>
        </Route>
        <Route path="/trainers">
          <p>Trainer Page Placeholder</p>
          <Trainers trainers={trainers}/>
        </Route>
        <Route path="/pets">
          <p>Pet Page Placeholder</p>
          <Pets pets={pets}/>
        </Route>
        <Route path="/train-pet">
          <p>Pet Training Page Placeholder</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
