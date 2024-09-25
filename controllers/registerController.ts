import {Request, Response} from 'express'
import UserService from '../services/userService';
import UserRegister from '../Dto/userRegisterDto'

const register = async (req: Request, res: Response) => {
    try {
        const{
            id_hogar,
            name,
            email,
            password
        } = req.body;

        const userRegister: UserRegister = new UserRegister(
            id_hogar,
            name,
            email,
            password
        );

        await UserService.register(userRegister);

        return res.status(201).send({status:"register ok", password_hasheado: password});
    } catch (error: any) {
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).send({errorInfo: error.sqlMessage})
        }
        return res.status(500).send({errorInfo: "Error al registrar usuario"})
    }

    
}

export default register