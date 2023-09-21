const estudiantesModelo = require('../models/estudiantes');

exports.verEstudiantes = async (req, res)=>{
    const estudiantes = await estudiantesModelo.find();
    return estudiantes;
};

exports.verEstudiantesById = async (req, res)=>{
    const estudiantes = await estudiantesModelo.findById(id);
    return estudiantes;
}

exports.crearEstudinate = async (estudiante)=>{
    const nuevoEstudiante = new estudiantesModelo(estudiante);
    await nuevoEstudiante.save()
    return nuevoEstudiante
}

exports.actualizarEstudiante = async (id, estudiante)=>{
    const actualizarEstudiante = await estudiantesModelo.findByIdAndUpdate(id, estudiante);
    return actualizarEstudiante
}

exports.eliminarEstudiante = async (id)=>{
    const eliminarEstudiante = await estudiantesModelo.findByIdAndDelete(id);
    return eliminarEstudiante;
};