import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function NewPetForm({trainers, handlePost}){
    const [formData, setFormData] = useState({
        name: "",
        species: "",
        breed: "",
        age: 0,
        gender: "",
        personality: "",
        working_on: ""
    })
    const history = useHistory()

    function createFormInputs(key){
        if(key === "trainer_id") return null
        return (<React.Fragment key={key}>
        <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}: </label>
        <input type="text" name={key} value={formData[`${key}`]} onChange={handleChange}></input>
        </React.Fragment>)
    }

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

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        fetch(`http://localhost:9292/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newPet =>{
            handlePost(newPet)
            history.push('/pets')
        })
    }

    if (trainers.length > 0 && !formData.trainer_id){
        debugger
        setFormData({...formData, trainer_id: `${trainers[0].id}`})
    }

    return(
    <>
        <h3>Pet Creation!</h3>
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map(createFormInputs)}
            <label htmlFor="trainer">Trainer: </label>
            <select onChange={handleSelectChange}>
                {trainers.map((trainer, index) => <option key={trainer.id} id={`option-${index}`}>{trainer.name}・ID: {trainer.id}</option>)}
            </select>
            <button type='submit'>Submit</button>
        </form>
    </>)
}

export default NewPetForm