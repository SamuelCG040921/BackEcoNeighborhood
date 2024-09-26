import {Request, Response} from 'express';
import complaintService from '../services/complaintService';
import Complaint from '../Dto/complaintDto';

const createComplaint = async(req:Request, res:Response) =>{
    try {
        const  {
            comentario
        } = req.body

        const id_usuario = res.locals.user.id

        const complaint: Complaint = new Complaint(
            id_usuario,
            comentario
        )

        await complaintService.createComplaint(complaint);

        return res.status(201).json({status: "denuncia creada correctamente", denuncia: complaint});
    } catch (error) {
        console.error("Error al registrar denuncia: ",error);
        return res.status(500).send({error: 'Error interno del servidor'});
    }
}

export default createComplaint;