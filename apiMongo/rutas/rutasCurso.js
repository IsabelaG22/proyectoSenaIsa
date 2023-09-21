const express = require("express");

/*
definimos las rutas de cada uno de los metodos del controlador de cursos
teniendo en cuenta si son metodos get, post, patch o delete
y si tienen parametros o no
*/
const { 
    verCursos,
    verCursoPorId,
    crearCurso,
    asignarCurso
} = require("../controladores/controladorCurso");

const router = express.Router();

/*
tambien podemos definir rutas para cada metodo
por ejemplo para el metodo verCursos, verCursoPorId y crearCurso
router.route("/getAll").get(getAllCourses);
router.route("/getById/:id").get(getCourseById);
router.route("/create").post(createCourse);
*/
router.route("/").get(verCursos).post(crearCurso);
router.route("/:id").get(verCursoPorId).patch(asignarCurso);

module.exports = router;