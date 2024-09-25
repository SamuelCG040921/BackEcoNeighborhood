const bcrypt = require("bcryptjs");
const db = require("../config/config-db");
import {Request, Response} from 'express';
import generateToken from "../helpers/generateToken";
import Auth from '../Dto/authDto';
import UserService from '../services/userService';
import { any } from 'webidl-conversions';
import EmpresaService from '../services/empresaService';

const authController = async (req: Request, res: Response) =>{
    try{
        const {email, password, role} = req.body;

        let result: any;
        if (role === 'usuario'){
            result = await UserService.auth(new Auth(email,password));
        }else if (role === 'empresa'){
            result = await EmpresaService.auth(new Auth(email, password));
        }else{
            return res.status(400).json({status: "Invalid role"})
        }

        
        if(result.logged){
            return res.status(200).json({
                status: "Succesful Authentication",
                token: await generateToken(result.id)
            })
        }
        return res.status(401).json({
            status: "Incorrect username or password"
        });
    } catch (error) {
        console.log(error);
        
    }
}

export default authController;