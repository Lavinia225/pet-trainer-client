import Pets from "./Pets"

function Pet({pet}){
     //name, trainer, species, breed, age, gender, personality, working on
     function createTD(entry){
        if(entry[0] === "id") return

        else if(entry[0] === "trainer_id"){
            return <td>Placeholder</td>
        }
        else{
            return <td>{entry[1]}</td>
        }
     }

    return(
        <tr>
            {pet.map(createTD)}
        </tr>
    )
}
export default Pet