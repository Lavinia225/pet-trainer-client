import {NavLink} from 'react-router-dom'

function Trainer({trainer}){
    return(
        <tr>
            <NavLink to={`/trainers/update/${trainer.id}`}>✎</NavLink>
            <td>{trainer.name}</td>
            <td>{trainer.personality}</td>
            <td>{trainer.payrate}</td>
            <td>pets placeholder</td>
        </tr>
    )
}

export default Trainer