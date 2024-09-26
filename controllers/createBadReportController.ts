import {Request, Response} from 'express';
import BadReportService from '../services/badReportService';
import BadReport from '../Dto/badReportDto';

const createBadReportController = async(req: Request, res: Response) =>{
    try {
        const {
            id_hogar,
            comentario_reporte
        } = req.body

        const badReport: BadReport = new BadReport(
            id_hogar,
            comentario_reporte
        )

        await BadReportService.createBadReport(badReport);

        return res.status(201).json({status: "reporte de mal manejo creado correctamente", reporte: badReport});
    } catch (error) {
         console.error("Error al registrar reporte de mal manejo: ",error);
        return res.status(500).send({error: 'Error interno del servidor'});
    }
}

export default createBadReportController