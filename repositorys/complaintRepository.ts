import db from '../config/config-db';
import Complaint from '../Dto/complaintDto';

class ComplaintRepository{
    static async createComplaint(complaint:Complaint){
        const sql = 'CALL insertarDenuncia(?, ?)';
        const values = [
            complaint.id_usuario,
            complaint.comentario
        ]
        try{
            const [result]: any = await db.execute(sql, values);
            return result
        }catch(error) {
            console.error("Error al llamar el procdimiento almacenado crearReporteDesechos");
            throw error;
        }
    }

    static async getAllComplaints(){
        const sql = 'CALL obtenerTodasLasDenuncias()';
        try {
            const [rows]: any = await db.execute(sql);
            return rows[0]
        } catch (error) {
            console.error("Error en la ejecución del procedimiento almacenado: ", error);
            throw error;
        }
    }
}

export default ComplaintRepository