import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

function PetUpdateForm({handleUpdate, trainers}){
    const [formdata, setFormdata] = useState({}) //name, trainer, species, breed, age, gender, personality, working on
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:9292/pets/${params.id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return(<>
    
    </>)
}

export default PetUpdateForm