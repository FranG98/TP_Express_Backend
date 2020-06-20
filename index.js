const express = require('express');
const app = express();

const cors = require('cors');

const { mongoose } = require('./database');
//Configuracion
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Rutas
app.use('/api/punto1', require('./routes/asistentes.route'));
app.use('/api/punto2/mensajes', require('./routes/mensajes.route'));
app.use('/api/punto2/empresas', require('./routes/empresas.route'));
app.use('/api/punto3/', require('./routes/pasajes.route', './routes/adelantos.route'));
//app.use('/api/punto3/adelantos', require('./routes/adelantos.route'));
//Inicio
app.listen(app.get('port'), () =>{
    console.log("Server iniciado en puerto ",app.get('port'));
})