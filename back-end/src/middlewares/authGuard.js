import User from "../models/User.js";
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.SECRET

const authGuard = async (req, res, next) => {

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({errors: ["Acesso negado!"]})
    }

    try{

        const verified = jwt.verify(token, jwtSecret) 

        req.user = await User.findById(verified.id).select("-password")

        next()

    }catch(e){
        res.status(401).json({errors:["Token inválido."]})
    }
}

export default authGuard

