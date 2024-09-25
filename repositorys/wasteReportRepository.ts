import db from '../config/config-db';
import WasteReport from '../Dto/wasteReport';

class WasteReportRepository{
    static async createWasteReport(wasteReport: WasteReport){
        const sql = 'CALL crearReporteDesechos(? ,? , ?, ?)';
        const values = [
            wasteReport.id_usuario,
            wasteReport.tipo_residuo,
            wasteReport.tipo_bolsa,
            wasteReport.puntaje_reporte
        ];

        try{
            const [result]: any = await db.execute(sql, values);
            return result
        }catch(error) {
            console.error("Error al llamar el procdimiento almacenado crearReporteDesechos");
            throw error;
        }
        
    }

    static async updateUserPoints(id_usuario: number, puntaje_reporte: number) {
        const sql = 'CALL updateUserPoints(?, ?)';
        const values = [id_usuario, puntaje_reporte];

        try {
            const [result]: any = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error al llamar el procedimiento almacenado updateUserPoints', error);
            throw error;
        }
    }
}

export default WasteReportRepository;