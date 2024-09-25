import db from '../config/config-db';
import Auth from '../Dto/authDto';

class EmpresaRepository {
    static async login(auth: Auth) {
        const sql = 'CALL authEmpresaRecolectora(?)';
        const values = [auth.email];

        try {
            const [rows]: any = await db.execute(sql, values);
            const empresaRows = rows[0];

            if (empresaRows.length > 0) {
                return {
                    id_empresa: empresaRows[0].id_empresa,
                    password_empresa: empresaRows[0].password_empresa
                };
            } else {
                return { logged: false, status: 'No se encontró una empresa recolectora con el email proporcionado' };
            }
        } catch (error) {
            console.error("Error al llamar al procedimiento almacenado authEmpresaRecolectora:", error);
            throw error;
        }
    }
}

export default EmpresaRepository;
