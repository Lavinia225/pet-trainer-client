import {useState} from 'react'

function NewTrainerForm(){
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
    }
    //Need a button to cancel trainer creation
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