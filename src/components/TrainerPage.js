import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function TrainerPage(){
    const [trainer, setTrainer] = useState({})
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:9292/trainers/${params.id}`)
        .then(res => res.json())
        .then(t => setTrainer(t))
    }, [])

    return(
        <>
        
        </>
    )
}

export default TrainerPage