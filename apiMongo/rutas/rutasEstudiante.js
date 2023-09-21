const express = require("express");

/*
definimos las rutas de cada uno de los metodos del controlador de estudiantes
teniendo en cuenta si son metodos get, post, patch o delete
y si tienen parametros o no
*/
const { 
    verEstudiantes, 
    verEstudiantesById, 
    crearEstudiantes, 
    actualizarEstudiantes, 
    eliminarEstudiante, 
} = require("../controladores/controladorEstudiante");

const router = express.Router();

/*
tambien podemos definir rutas para cada metodo
por ejemplo para el metodo verEstudiantes, verEstudiantebyid y crearEstudiantes
router.route("/getAll").get(getAllStudents);
router.route("/getById/:id").get(getStudentById);
router.route("/create").post(createStudent);
*/

router.route("/").get(verEstudiantes).post(crearEstudiantes);
router.route("/:id").get(verEstudiantesById).patch(actualizarEstudiantes).delete(eliminarEstudiante);

module.exports = router;