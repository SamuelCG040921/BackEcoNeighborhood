import {Request, Response} from 'express';
import UserService from '../services/userService';

const getUserDataController = async(req:Request, res:Response) => {
    try {
        const id_usuario = res.locals.user.id;
        const result = await UserService.getUserById(id_usuario);
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({message: "Usuario no encontrado"});
        }
    } catch (error) {
        res.status(500).json({message: "Error al obtener el usuario"})
    }
}

export default getUserDataController;