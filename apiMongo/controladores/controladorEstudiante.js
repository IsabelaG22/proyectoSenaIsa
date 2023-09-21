const estudianteServicios = require('../services/serviciosEstudiantes');

exports.verEstudiantes = async (req, res)=>{
    try{
        const estudiantes = await estudianteServicios.verEstudiantes();
        res.status(200).json(estudiantes);
    }
    catch(error){
        res.status(500).json(error);
    }
};

exports.verEstudiantesById = async (req, res) => {
    try {
        const student = await estudianteServicios.verEstudiantesById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.crearEstudiantes = async (req, res)=>{
    try{
        const estudiantes = await estudianteServicios.crearEstudiantes(req.body);
        res.status(200).json(estudiantes);
    }
    catch(error){
        res.status(500).json(error);
    }
};

exports.actualizarEstudiantes = async (req, res)=>{
    try{
        const estudiantes = await estudianteServicios.actualizarEstudiante(req.params.id, req.body);
        res.status(200).json(estudiantes);
    }
    catch(error){
        res.status(500).json(error);
    }
};

exports.eliminarEstudiante = async (req, res)=>{
    try{
        const estudiantes = await estudianteServicios.eliminarEstudiante(req.params.id);
        res.status(200).json(estudiantes);
    }
    catch(error){
        res.status(500).json(error);
    }
};