import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import register from './routes/register';
import auth from './routes/auth';
import createWasteReport from './routes/createWasteReport';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

//LINKEO A LAS RUTAS
app.use('/register', register)
app.use('/auth', auth)
app.use('/createWasteReport', createWasteReport)


const PORT = process.env.PORT || 10101;
server.listen(PORT, () =>{
    console.log(`Servidor ejecuntandose en el puerto${PORT}`);
}).on("error", (error) => {
    console.error('Error al iniciar el servidor: ',error.message);
})