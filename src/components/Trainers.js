import Trainer from './Trainer'
import NewTrainerForm from './NewTrainerForm'
import {Link} from 'react-router-dom'

function Trainers({trainers}){
    
    return(
        <>
            <Link to="/trainers/create">Create New Trainer</Link>
            <table>
                <tbody>
                    <tr>
                        <th>Trainer: </th>
                        <th>Personality: </th>
                        <th>Payrate: </th>
                        <th>Pets Training:</th>
                    </tr>
                    {trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer} />)}
                </tbody>
            </table>
        </>
    )
}

export default Trainers