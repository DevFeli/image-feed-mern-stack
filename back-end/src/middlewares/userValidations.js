import { body } from 'express-validator'

export const userCreateValidation = () => {
    return [
        body("name").isString().withMessage("O nome é obrigatório.").isLength({min:3}).withMessage("O nome precisa ter no mínimo 3 caracteres."),
        body("email").isString().withMessage("Insira um e-mail válido"),
        body("password").isString().withMessage("A senha é obrigatória.").isLength({min:5}).withMessage("A senha deve ter no mínimo 5 caracteres"),
        body("confirmpassword").isString().withMessage("A confrmação é obrigatória.").custom((value, {req}) => 
            {if(value != req.body.password){throw new Error('As senha não são iguais')} return true } )
    ]
}
