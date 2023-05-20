import {Link} from 'react-router-dom'

function Pet({pet}){

     function createTD(entry){
        if(entry[0] === "id" || entry[0] === "trainer_id" || entry[0] === "name") return null
        else{
            return <td key={entry[1]}>{entry[1]}</td>
        }
     }

    return(
        <tr>
            <td><Link to={`/pets/${pet[0][1]}/edit`}>{pet[1][1]}</Link></td>
            {pet.map(createTD)}
        </tr>
    )
}
export default Pet