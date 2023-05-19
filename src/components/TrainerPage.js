import {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import TrainerUpdateForm from './TrainerUpdateForm'

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

    return(
        <>
            {editing ? <TrainerUpdateForm cancelEdit={handleEditing} trainer={trainer} handleUpdate={handleUpdate} handlePageUpdate={handlePageUpdate}/> :<>
            <h3><span onClick={handleEditing}>✎</span> {trainer.name}</h3>
            <p>{trainer.personality} personality・${trainer.payrate} per hour</p>
            <p>Is training the following pets: </p>
            {/*{trainer.map(pet => <Pet key={pet.id} pet={pet}/>)}*/}
            </>}
        </>
    )
}

export default TrainerPage