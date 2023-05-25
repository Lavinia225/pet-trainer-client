import React, {useState} from 'react'

function NewPetForm(){//name, trainer, species, breed, age, gender, personality, working on
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

    return(
    <>
        <form>
            {Object.keys(formData).map(createFormInputs)}
        </form>
    </>)
}

export default NewPetForm