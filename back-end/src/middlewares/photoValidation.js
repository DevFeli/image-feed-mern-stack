import { body } from 'express-validator'

export const photoInsertValidation = () => {
    return [
        body("title").not().equals("undefined").withMessage("O titulo é obrigatório.").isString().withMessage("O titulo é obrigatório.").isLength({min:3}).withMessage("O titulo precisa ter no mínimo 3 caracteres"),
        body("image").custom((value, {req}) => {
            if(!req.file){
                throw new Error("A imagem é obrigatória.")
            }
            return true
        })
    ]
}