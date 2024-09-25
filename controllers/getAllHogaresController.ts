import {Request, Response} from 'express';
import HogarService from '../services/hogarService';

const getAllHogaresController = async (req: Request, res: Response) => {
    try{
        const hogares = await HogarService.getAllHogares();
        return res.status(200).json(hogares);
    }catch(error){
        console.error("Error al obtener hogares: ",error);
        return res.status(500).send({error: 'Error interno del servidor'})
    }
}

export default getAllHogaresController;