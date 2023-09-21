const cursoModelo = require('../models/curso');

exports.verCursos = async (req, res)=>{
    const cursos = await cursoModelo.find();
    return cursos
};

exports.verCursoById = async (id)=>{
    const curso = await cursoModelo.findById(id);
    return curso
};


/*
asignamos un estudiante a un curso
para esto recibimos el id del curso y el id del estudiante
validamos que el curso y el estudiante existan
y que el estudiante no este ya en el curso
en el arreglo de estudiantes agregamos una version reducida del estudiante
solo con los datos necesarios
*/
exports.asignarCurso = async (id, studentId) => { 
    const course = await courseModel.findById(id);
    if (course == null)
        throw new Error("Cannot find course");

    const student = await studentModel.findById(studentId);
    if (student == null)
        throw new Error ("Cannot find student");

    const studentAlreadyInCourse = course.students.find(s => s.studentId == studentId);
    if (studentAlreadyInCourse != null) 
        throw new Error("Student already in course");

    const studentInCourse = {
        studentId: student._id,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email
    };

    course.students.push(studentInCourse);
    await course.save();
    return course;
};

exports.updateCourse = async (id, course) => {
    const updatedCourse = await cursoModelo.findByIdAndUpdate(id, course);
    return updatedCourse;
};