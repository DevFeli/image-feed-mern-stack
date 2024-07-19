import "./NavBar.css"

import { NavLink, Link } from "react-router-dom"
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"

import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function NavBar(){

    const {auth} = useAuth()
    const {user} = useSelector((state) => state.auth) 

    return(
        <nav id="nav">
            <Link to={'/'}>Imagem Feed</Link>
            <form id="search-form">
                <BsSearch/>
                <input type="text" placeholder="Pesquisar"/>
            </form>

            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/">
                                <BsHouseDoorFill/>
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={`/users/${user.id}`}>
                                    <BsFillCameraFill/>
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink>
                                <BsFillPersonFill/>
                            </NavLink>
                        </li>
                        <li>
                            <span>Sair</span>
                        </li>
                    </>
                ) : (
                    <>
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
                    </>
                )}

            </ul>
        </nav>
    )
}