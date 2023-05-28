import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom"

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
    const history = useHistory()

    useEffect(()=>{
        fetch(`http://localhost:9292/pets/${params.id}`)
        .then(res => res.json())
        .then(pet =>{
            setFormData(pet)
            document.getElementById(`option${pet.trainer_id}`).selected = true
        })
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
        return (<React.Fragment key={key}>
        <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}: </label>
        <input type="text" name={key} value={formData[`${key}`]} onChange={handleChange}></input>
        </React.Fragment>)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/pets/${formData.id}}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(handleUpdate)
        .then(history.push('/pets'))
    }

    function cancelEdit(){
        history.push('/pets')
    }

    return(
    <>
        <h3>Pet Editing!</h3>
        <button onClick={cancelEdit} className="edit-button">Cancel Editing</button>
        <form>
        {Object.keys(formData).map(createFormInputs)}
        <label htmlFor="trainer">Trainer: </label>
        <select onChange={handleSelectChange}>
            {trainers.map(trainer => <option key={trainer.id} id={`option${trainer.id}`}>{trainer.name}・ID: {trainer.id}</option>)}
        </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </>)
}

export default PetUpdateForm