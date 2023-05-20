import Pet from './Pet'

function Pets({pets}){
    //name, trainer, species, breed, age, gender, personality, working on
    return(
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
                    <th>Trainer: </th>
                </tr>
                {pets.map(pet => <Pet key={pet.id} pet={Object.entries(pet)}/>)}
            </tbody>
        </table>
    )
}

export default Pets