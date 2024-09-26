import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import register from './routes/register';
import auth from './routes/auth';
import createWasteReport from './routes/createWasteReport';
import getAllHogares from './routes/getAllHogares';
import createComplaint from './routes/createComplaint';
import getUserData from './routes/getUserData';
import getComplaints from './routes/getComplaints';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

//LINKEO A LAS RUTAS
app.use('/register', register)
app.use('/auth', auth)
app.use('/createWasteReport', createWasteReport)
app.use('/hogares', getAllHogares)
app.use('/createComplaint', createComplaint)
app.use('/user', getUserData)
app.use('/complaints', getComplaints)


const PORT = process.env.PORT || 10101;
server.listen(PORT, () =>{
    console.log(`Servidor ejecuntandose en el puerto${PORT}`);
}).on("error", (error) => {
    console.error('Error al iniciar el servidor: ',error.message);
})