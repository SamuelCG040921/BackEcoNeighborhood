import jwt from 'jsonwebtoken';

function generateTokenId(id: string){
    try{
        const token = jwt.sign({id: id}, 'samuel', {expiresIn: '6h'})
        return token
    } catch (error){
        console.error('Error al generar el token', error);
        throw new Error('Error al generar el token')   
    }
}

export default generateTokenId;