import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pets">Pets</NavLink>
            <NavLink to="/trainers">Trainers</NavLink>
        </nav>
    )
}

export default NavBar