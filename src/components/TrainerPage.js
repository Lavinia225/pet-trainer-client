import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function TrainerPage(){
    const [trainer, setTrainer] = useState({})
    const params = useParams()

    useEffect(()=>{
        fetch(`https://localhost:9292/trainers/${params.id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    console.log("Params are", params)
    return(
        <></>
    )
}

export default TrainerPage