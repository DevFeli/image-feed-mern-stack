import bcrypt from 'bcrypt'
import User from "../models/User.js";
import generateToken from './../utils/genereteToken.js';


export const register = async (req, res) => {
    
    const {name, email, password} = req.body

    const user = await User.findOne({email})

    if(user){
        res.status(422).json({errors:["Por favor, utilize outro e-mail"]})
        return
    }

    const salt = await bcrypt.genSalt()

    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        name,
        email,
        password:passwordHash
    })

    if(!newUser){
        res.status(422).json({errors:["Ocorreu um erro inesperado, por favor tente mais tarde."]})
        return
    }

    res.status(201).json({
        token: generateToken(newUser._id)
    })
}

export const login = async (req,res) => {
    
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(!user){
        res.status(404).json({errors: ["Usuário não encontrado."]})
        return
    }

    if(!(await bcrypt.compare(password, user.password))){
        res.status(422).json({errors: ["Senha inválida."]})
        return
    }

    res.status(201).json({
        _id: user._id,
        profileImage:user.profileImage,
        token: generateToken(user._id)
    })
}

