import {Link} from 'react-router-dom'

function Pet({pet, handleDelete}){

     function createTD(entry){
        if(entry[0] === "id" || entry[0] === "trainer_id" || entry[0] === "name") return null
        else{
            return <td key={entry[1] + Math.random(0, 999)}>{entry[1]}</td>
        }
     }

     function progressDelete(){
        if(window.confirm("Are you sure you want to delete this entity?")){
            fetch(`http://localhost:9292/pets/${pet[0][1]}`, {
                method: "DELETE"
            })
            .then(()=>handleDelete(pet[0][1]))
        }
     }

    return(
        <tr>
            <td><Link to={`/pets/${pet[0][1]}/edit`}>{pet[1][1]}</Link></td>
            {pet.map(createTD)}
            <td onClick={progressDelete}>🗑</td>
        </tr>
    )
}
export default Pet