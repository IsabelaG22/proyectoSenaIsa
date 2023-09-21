const express = require('express');
const morgan= require('morgan')
const app = express();

const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true })) // se necesita para que analice los req entrantes es decir las peticiones




const studentRoutes = require("./apiMongo/rutas/rutasEstudiante");
const courseRoutes = require("./apiMongo/rutas/rutasCurso");



//se deben agregar las rutas de los estudiantes y los cursos
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);





mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusteradsi2498009.swn5znl.mongodb.net/${process.env.DB_NAMEBD}?retryWrites=true&w=majority`,
{   useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log('conectado a mongo'))
    .catch((err) => {
        console.error("ERROR AL CONECTARSE");
        console.error(err)
    });

app.get('/', (req,res)=>{
    res.send('Hola mundo con express')
});

app.listen(3001, ()=>{
    console.log('Servidor en 3000')
});