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
        working_on: "",
        trainer_id: 0
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

    function handleSelectChange(e){
        setFormData({
            ...formData,
            trainer_id: parseInt(e.target.value.match(/\d/g).join(""))
        })
    }

    function createFormInputs(key){
        if(key === "id" || key === "trainer_id") return null
        return (<>
        <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}: </label>
        <input type="text" name={key} value={formData[`${key}`]} onChange={handleChange}></input>
        </>)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/pets/${formData.id}}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/jsobn"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => console.log("returned data", data))
    }

    return(
    <>
        <button>Cancel Editing</button>{/*Currently does nothing */}
        <form>
        {Object.keys(formData).map(createFormInputs)}
        <select onChange={handleSelectChange}>
            {trainers.map(trainer => <option>{trainer.name}・ID: {trainer.id}</option>)}
        </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </>)
}

export default PetUpdateForm