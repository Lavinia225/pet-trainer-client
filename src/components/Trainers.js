import Trainer from './Trainer'

function Trainers({trainers}){
    //Adjust backend to give pet IDs and names to trainers, not just IDs

    return(
        <table>
            <tbody>
                <tr>
                    <th>Trainer: </th>
                    <th>Personality: </th>
                    <th>Payrate: </th>
                </tr>
                {trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer} />)}
            </tbody>
        </table>
    )
}

export default Trainers