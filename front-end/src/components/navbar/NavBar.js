import "./NavBar.css"

import { NavLink, Link } from "react-router-dom"
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCakeFill } from "react-icons/bs"

export default function NavBar(){
    return(
        <nav id="nav">
            <Link to={'/'}>Imagem Feed</Link>
            <form id="search-form">
                <BsSearch/>
                <input type="text" placeholder="Pesquisar"/>
            </form>

            <ul id="nav-links">
                <li>
                    <NavLink to="/">
                        <BsHouseDoorFill/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register">
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}