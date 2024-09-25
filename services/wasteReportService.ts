import WasteReportRepository from '../repositorys/wasteReportRepository';
import WasteReport from '../Dto/wasteReport';

class WasteReportService{
    static async createReport(wasteReport: WasteReport){
        if(
            (wasteReport.tipo_residuo === 'Ordinario' && wasteReport.tipo_bolsa === 'Negra') ||
            (wasteReport.tipo_residuo === 'Reciclable' && wasteReport.tipo_bolsa === 'Blanca') ||
            (wasteReport.tipo_residuo === 'Orgánico' && wasteReport.tipo_bolsa === 'Verde')
        ){
            wasteReport.puntaje_reporte = 5
        }

        await WasteReportRepository.createWasteReport(wasteReport);
        await WasteReportRepository.updateUserPoints(wasteReport.id_usuario, wasteReport.puntaje_reporte);
    }
}

export default WasteReportService;