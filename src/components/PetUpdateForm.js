import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

function PetUpdateForm({handleUpdate, trainers}){
    const [formData, setFormData] = useState({
        name: "",
        species: "",
        breed: "",
        age: 0,
        gender: "",
        personality: "",
        working_on: ""
    })
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:9292/pets/${params.id}`)
        .then(res => res.json())
        .then(pet => setFormData(pet))
    },[])

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
    <>
        <button>Cancel Editing</button>{/*Currently does nothing */}
        <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' value={formData.name} onChange={handleChange}></input>
        <label htmlFor="species">Species: </label>
        <input type="text" name="species" value={formData.species} onChange={handleChange}></input>
        <label htmlFor="breed">Breed: </label>
        <input type="text" name="breed" value={formData.breed} onChange={handleChange}></input>
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" value={formData.age} onChange={handleChange}></input>
        <label htmlFor="gender">Gender: </label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange}></input>
        <label htmlFor="personality">Personality: </label>
        <input type="text" name="personality" value={formData.personality} onChange={handleChange}></input>
        <label htmlFor="working_on">Working On: </label>
        <input type="text" name="working_on" value={formData.working_on} onChange={handleChange}></input>
        {Object.keys(formData).map(key => <>
            <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}: </label>
            <input type="text" name={key} value={formData[`${key}`]} onChange={handleChange}></input>
            {console.log(key)}
        </>)}
        </form>
    </>)
}

export default PetUpdateForm