import {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import TrainerUpdateForm from './TrainerUpdateForm'
import Pets from './Pets'

function TrainerPage({handleUpdate}){
    const [trainer, setTrainer] = useState({})
    const [editing, setEditing] = useState(false)
    const params = useParams()
    const history = useHistory()

    useEffect(()=>{
        fetch(`http://localhost:9292/trainers/${params.id}`)
        .then(res => res.json())
        .then(t => setTrainer(t))
    }, [])

    function handleEditing(){
        if(editing){
            history.push(`/trainers/${trainer.id}`)
        }
        else{
            history.push(`/trainers/${trainer.id}/edit`)
        }
        setEditing(!editing)
    }

    function handlePageUpdate(updatedTrainer){
        setTrainer(updatedTrainer)
    }

    function petChecker(){
        if(trainer.pets !== undefined && trainer.pets.length > 0){
            return true
        }
        else if(trainer.pets !== undefined && trainer.pets.length === 0){
            return false
        }
        else{
            return false
        }
    }

    return(
        <>
            {editing ? <TrainerUpdateForm cancelEdit={handleEditing} trainer={trainer} handleUpdate={handleUpdate} handlePageUpdate={handlePageUpdate}/> :<>
            <h3><span onClick={handleEditing}>✎</span> {trainer.name}</h3>
            <hr />
            <p>{trainer.personality} personality・${trainer.payrate} per hour</p>
            <p>Is training the following pets: </p>
            {petChecker() ? <Pets pets={trainer.pets} isTrainer={true}/> : <p>No pets</p>}
            </>}
        </>
    )
}

export default TrainerPage