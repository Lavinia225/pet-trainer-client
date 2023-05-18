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
            <h3><span>✎</span> {trainer.name}</h3>
            <p>{trainer.personality} personality・${trainer.payrate} per hour</p>
            <p>Is training the following pets: </p>
            {/*{trainer.map(pet => <Pet key={pet.id} pet={pet}/>)}*/}
        </>
    )
}

export default TrainerPage