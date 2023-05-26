import {useState} from 'react'

function  TrainerUpdateForm({cancelEdit, handleUpdate, handlePageUpdate, trainer}){
    const [formData, setFormData] = useState({
        name: trainer.name,
        personality: trainer.personality,
        payrate: trainer.payrate
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/trainers/${trainer.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(updatedTrainer =>{
            cancelEdit()
            handleUpdate(updatedTrainer)
            handlePageUpdate(updatedTrainer)
        })}

    return(
        <>
            <h3>Trainer Editing!</h3>
            <h3 id='trainer-update-warning'>You can only reassign a pet's trainer from a pet's specific edit form.</h3>
            <button onClick={cancelEdit} className="edit-button">Cancel Editing</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' value={formData.name} onChange={handleChange}></input>
                <label htmlFor="personality">Personality: </label>
                <input type="text" name='personality' value={formData.personality} onChange={handleChange}></input>
                <label htmlFor="payrate">Payrate: </label>
                <input type="number" name="payrate" value={formData.payrate} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default TrainerUpdateForm