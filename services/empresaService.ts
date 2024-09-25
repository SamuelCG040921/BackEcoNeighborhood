import EmpresaRepository from '../repositorys/empresaRepository';
import bcrypt from 'bcryptjs';
import Auth from '../Dto/authDto';

class EmpresaService {

    static async auth(auth: Auth) {
        try {
            const result: any = await EmpresaRepository.login(auth);

            // Verificar si se encontró la empresa
            if (result && result.password_empresa) {
                // Comparar directamente la contraseña ingresada con la almacenada en la base de datos
                if (auth.password === result.password_empresa) {
                    return { logged: true, status: "Successful Authentication", id: result.id_empresa };
                } else {
                    return { logged: false, status: "Incorrect username or password" };
                }
            } else {
                return { logged: false, status: "No se encontró la empresa recolectora" };
            }
        } catch (error) {
            console.error("Error al autenticar:", error);
            throw new Error("Authentication failed");
        }
    }
}

export default EmpresaService;