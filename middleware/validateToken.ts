import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];
    
    if (headerToken && headerToken.startsWith('Bearer ')) {
        const bearerToken = headerToken.slice(7); // Remover "Bearer " del token

        try {
            // Verificar el token con la clave secreta 'camilo'
            const tokenValido = jwt.verify(bearerToken, 'samuel') as { id?: number, exp?: number };
            
            // Verificar si el token contiene un email válido
            if (tokenValido.id) {
                res.locals.user = tokenValido;
                next(); // Pasar al siguiente middleware o controlador
            } else {
                res.status(400).json({ message: "Id no disponible en el token" });
            }
        } catch (error) {
            // Diferenciar entre errores de token expirado y otros errores
            if (error instanceof jwt.TokenExpiredError) {
                res.status(401).json({ status: 'Token expirado' });
            } else {
                console.error("Error al verificar el token:", error);
                res.status(403).json({ status: 'Acceso denegado: Token no válido' });
            }
        }
    } else {
        res.status(400).json({ status: 'Acceso denegado: Token no proporcionado' });
    }
};

export default validateToken;

