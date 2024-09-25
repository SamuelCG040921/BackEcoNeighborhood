import db from '../config/config-db';
import Hogar from '../Dto/hogarDto';

class HogarRepository {
    static async getAllHogares(){
        const sql = 'CALL obtenerTodosLosHogares()';
        try {
            const [rows]:any = await db.execute(sql);
            return rows[0];
        } catch (error) {
            console.error("Error en la ejecución del procedimiento almacenado: ", error);
            throw error;
        }
    }
}

export default HogarRepository;