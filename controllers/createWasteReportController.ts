import {Request, Response} from 'express';
import WasteReportService from '../services/wasteReportService'
import WasteReport from '../Dto/wasteReport'

const createWasteReport = async(req: Request, res: Response) => {
    try{
        const {
            tipo_residuo,
            tipo_bolsa
        } = req.body
    
        const id_usuario = res.locals.user.id
        let puntaje_reporte = 0;
    
        const wasteReport: WasteReport = new WasteReport(
            id_usuario,
            tipo_residuo,
            tipo_bolsa,
            puntaje_reporte
        )
    
        await WasteReportService.createReport(wasteReport);
        
        return res.status(201).json({status: "reporte creado correctamente", reporte: wasteReport})
    }catch(error){
        console.error("Error al registrar reporte de resiudos: ",error);
        return res.status(500).send({error: 'Error interno del servidor'});
    }
   
}

export default createWasteReport;