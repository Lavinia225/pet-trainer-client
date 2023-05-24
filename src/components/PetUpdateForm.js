import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

function PetUpdateForm({handleUpdate, trainers}){
    const [formData, setFormData] = useState({
        name: "",
        trainer: "",
        species: "",
        breed: "",
        age: 0,
        gender: "",
        personality: "",
        workingOn: ""
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
        </form>
    </>)
}

export default PetUpdateForm