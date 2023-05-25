import Pet from './Pet'
import {Link} from 'react-router-dom'

function Pets({pets, isTrainer = false, handleDelete}){

    return(
        <>
            {isTrainer ? null : <Link to="/pets/create">Create New Pet</Link>}
            <table>
                <tbody>
                    <tr>
                        <th>Name: </th>
                        <th>Species: </th>
                        <th>Breed: </th>
                        <th>Age: </th>
                        <th>Gender: </th>
                        <th>Personality: </th>
                        <th>Working On: </th>
                        {isTrainer ? null : <>
                            <th>Trainer: </th>
                            <th>Delete: </th>
                        </>}
                    </tr>
                    {pets.map(pet => <Pet key={pet.id} pet={Object.entries(pet)} handleDelete={handleDelete} isTrainer={isTrainer}/>)}
                </tbody>
            </table>
        </>
    )
}

export default Pets