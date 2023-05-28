import Trainer from './Trainer'
import {Link} from 'react-router-dom'

function Trainers({trainers}){

    return(
        <>
            <Link to="/trainers/create">Create New Trainer</Link>
            <div className="divider"></div>
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