import { useState } from "react"
import "./Register.css"

import { Link } from "react-router-dom"

export default function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const user = {
        name,
        email,
        password,
        confirmPassword
    }

    return(
        <div id="register">
            <h2>Imagem Feed</h2>
            <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senah"/>
                <input type="submit" value={'Cadastrar'}/>
            </form>
            <p>Já tem conta? <Link to={'/login'}>Clique aqui.</Link></p>
        </div>
    )
}