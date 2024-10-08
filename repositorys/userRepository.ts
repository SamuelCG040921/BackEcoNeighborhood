import db from '../config/config-db';
import Auth from '../Dto/authDto';
import UserRegister from '../Dto/userRegisterDto';

class UserRepository{
    static async add(user: UserRegister){
        const sql = 'CALL insertarUsuario(?, ?, ?, ?)';
        const values = [
            user.id_hogar,
            user.nombre,
            user.email,
            user.password
        ];

        try{
            const [result]: any = await db.execute(sql, values);
            return result
        }catch(error) {
            console.error("Error al llamar el procdimiento almacenado insertarUsuario");
            throw error;
        }
    }

    static async login(auth: Auth) {
        const sql = 'CALL authUsuario(?)';
        const values = [auth.email];
    
        try {
            const [rows]: any = await db.execute(sql, values);
            const user = rows[0];
            

            if (user && user.length > 0) {
                return { password: user[0].password, id_usuario: user[0].id_usuario };
            } else {
                throw new Error('No se encontró el usuario con el email proporcionado.');
            }
        } catch (error) {
            console.error("Error al llamar al procedimiento almacenado authUsuario:", error);
            throw error;
        }
    }    

   static async getUserById(id: number){
    const sql = 'CALL getUsuarioById(?)';
    const values = [id];

    try {
        const [rows]: any = await db.execute(sql, values);
        const user = rows[0];

        if(user && user.length > 0){
            return {
                id_hogar : user[0].id_hogar,
                nombre: user[0].nombre,
                puntuacion_usuario: user[0].puntuacion_usuario,
                email: user[0].email
            };
        }else{
            throw new Error('Usuario no encontrado.');
        }
    } catch (error) {
        console.error("Error al llamar al procedimiento almacenado getUsuarioById:", error);
        throw error;
    }
   }
}

export default UserRepository;