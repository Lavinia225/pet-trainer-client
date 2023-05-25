import React, {useState} from 'react'

function NewPetForm({trainers}){//name, trainer, species, breed, age, gender, personality, working on
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
        fetch(`http://localhost:9292/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newPet => console.log(newPet))
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map(createFormInputs)}
            <select onChange={handleSelectChange}>
                {trainers.map(trainer => <option key={trainer.id}>{trainer.name}・ID: {trainer.id}</option>)}
            </select>
            <button type='submit'>Submit</button>
        </form>
    </>)
}

export default NewPetForm