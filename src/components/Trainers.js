import Trainer from './Trainer'

function Trainers({trainers}){
    
    return(
        <table>
            <tbody>
                <tr>
                    <th>Edit</th>
                    <th>Trainer: </th>
                    <th>Personality: </th>
                    <th>Payrate: </th>
                    <th>Pets Training:</th>
                </tr>
                {trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer} />)}
            </tbody>
        </table>
    )
}

export default Trainers