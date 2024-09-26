import UserRepository from '../repositorys/userRepository';
import bcrypt from 'bcryptjs';
import UserRegister from '../Dto/userRegisterDto';
import generateHash from '../helpers/generateHash';
import Auth from '../Dto/authDto';


class UserService{

    static async register(user: UserRegister){
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }

    static async auth(auth: Auth){
        try {
            const result: any = await UserRepository.login(auth);

            if (result && result.password) {
                // Mostrar el hash almacenado y la contraseña proporcionada
                console.log('Contraseña almacenada (hash):', result.password);
                console.log('Contraseña proporcionada:', auth.password);
    
                // Realizamos la comparación usando bcrypt
                const isPasswordValid = await bcrypt.compare(auth.password, result.password);
    
                console.log('Resultado de la comparación de contraseña:', isPasswordValid);
    
                if (isPasswordValid) {
                    return { logged: true, status: "Successful Authentication", id: result.id_usuario };
                } else {
                    return { logged: false, status: "Incorrect username or password" };
                }
            } else {
                return { logged: false, status: "No se encontró el usuario" };
            }
        } catch (error) {
            console.error("Error al autenticar:", error);
            throw new Error("Authentication failed");
        }
        }

        static async getUserById(id: number){
            try {
                const result = await UserRepository.getUserById(id);
                if(result){
                    return result
                }else{
                    throw new Error("usuario no encontrado")
                }
            } catch (error) {
                console.error("Error al obtener el usuario por id: ", error);
                throw error
            }
        }
       
 }
    



export default UserService;