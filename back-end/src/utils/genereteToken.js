const secret = process.env.SECRET
import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({id}, secret, {
        expiresIn: "7d",
    })
}

export default generateToken