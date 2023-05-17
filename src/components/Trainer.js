import {Link} from 'react-router-dom'

function Trainer({trainer}){
    return(
        <tr>
            <td><Link to={`/trainers/${trainer.id}`}>{trainer.name}</Link></td>
            <td>{trainer.personality}</td>
            <td>{trainer.payrate}</td>
            <td>{trainer.pets.length}</td>
        </tr>
    )
}

export default Trainer