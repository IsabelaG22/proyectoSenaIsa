const cursoServicios = require('../services/serviciosCurso');


exports.verCursos = async (req, res)=>{
    try{
        const cursos = await cursoServicios.verCursos();
        res.status(200).json(cursos);
    }
    catch(error){
        res.status(500).json(error);
    }
};

exports.verCursoPorId = async (req, res)=>{
    try{
        const curso = await cursoServicios.verCursoById();
        res.status(200).json(curso);
    }
    catch(error){
        res.status(500).json(error);
    }
};

exports.verCursos = async (req, res)=>{
    try{
        const cursos = await cursoServicios.verCursos();
        res.status(200).json(cursos);
    }
    catch(error){
        res.status(500).json(error);
    }
};

//creamos un nuevo curso
exports.crearCurso = async (req, res) => {
    try {
        const curso = await cursoServicios.crearCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

/*
asignamos un estudiante a un curso
para esto recibimos el id del curso y el id del estudiante
el id del curso lo recibimos como parametro de la ruta
el id del estudiate lo recibimos como parametro de la consulta
*/
exports.asignarCurso = async (req, res) => {
    try {
        const course = await cursoServicios.AssingCourse(req.params.id, req.query.studentId);
        res.status(201).json(course);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};