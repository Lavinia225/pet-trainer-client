function Trainer({trainer}){
    return(
        <tr>
            <td>{trainer.name}</td>
            <td>{trainer.personality}</td>
            <td>{trainer.payrate}</td>
            <td>pets placeholder</td>
        </tr>
    )
}

export default Trainer