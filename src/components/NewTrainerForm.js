import {useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function NewTrainerForm({handlePost}){
    const [formData, setFormData] = useState({
        name: "",
        personality: "",
        payrate: 0
    })
    const history = useHistory()

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/trainers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newTrainer =>{
            handlePost(newTrainer)
            history.push('/trainers')
        })}
    
    return(
        <>
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

export default NewTrainerForm