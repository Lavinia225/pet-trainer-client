import {Route, Switch} from "react-router-dom"
import {useState, useEffect} from 'react'

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

console.log(trainers)
console.log(pets)

  return (
    <div className="App">
      {/*NavBar*/}
      <Switch>
        <Route exact path="/">
          <p>Placeholder text for nyaow.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
