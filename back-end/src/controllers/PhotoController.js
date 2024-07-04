import User from '../models/User.js';
import Photo from './../models/Photo.js';

import mongoose from 'mongoose';

export const insertPhoto = async (req, res) => {

    const { title } = req.body
    const image = req.body.file

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    const newPhoto = await Photo.create({
        image,
        title,
        userId:user._id,
        userName:user.name
    })

    if(!newPhoto){
        res.status(422).json({errors:["Houve um problema tente novamente mais tarde."]})
        return
    }

    res.status(201).json(newPhoto)
}

export const deletePhoto = async (req, res) => {

    const {id} = req.params

    try{
        const reqUser = req.user
        const photo = await Photo.findById(id)
        
        if(!photo.userId.equals(reqUser._id)){
            res.status(422).json({errors:["Ocorreu um erro, tente novamente mais tarde."]})
            return
        }

        await Photo.findByIdAndDelete(photo._id)
        
        res.status(200).json({id:photo._id, message:"Foto excluída com sucesso."})

    }catch(error){
        res.status(404).json({erros:["Foto não encontrada."]})
    }
}

export const allPhotos = async (req, res) => {

    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}
