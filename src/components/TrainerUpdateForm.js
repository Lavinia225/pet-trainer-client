import {useState} from 'react'
//Figure out how to have this assign and unassign pets | name,personality, payrate at the fields here
function  TrainerUpdateForm({trainer}){
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

    return(
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" value={formData.name} onChange={handleChange}></input>
        </form>
    )
}

export default TrainerUpdateForm