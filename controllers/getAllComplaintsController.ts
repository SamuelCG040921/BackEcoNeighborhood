import {Request, Response} from 'express';
import ComplaintService from '../services/complaintService';

const getAllComplaintsController = async(req:Request, res:Response) =>{
    try {
        const complaints = await ComplaintService.getAllComplaints();
        return res.status(200).json(complaints);
    } catch (error) {
        console.error("Error al obtener denuncias: ",error);
        return res.status(500).send({error: 'Error interno del servidor'})
    }
}

export default getAllComplaintsController;