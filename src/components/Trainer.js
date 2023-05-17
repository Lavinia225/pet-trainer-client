import {NavLink} from 'react-router-dom'

function Trainer({trainer}){
    return(
        <tr>
            <td><NavLink to={`/trainers/update/${trainer.id}`}>✎</NavLink></td>
            <td>{trainer.name}</td>
            <td>{trainer.personality}</td>
            <td>{trainer.payrate}</td>
            <td>{trainer.pets.length}</td>
        </tr>
    )
}

export default Trainer