const express = require('express');
const app = express();

// Paso 1: Crear la estructura del estudiante
function Estudiante(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
  }
  
 
  
  // Paso 3: Agregar nuevos estudiantes
  function agregarEstudiante(nombre, calificaciones) {
    const nuevoEstudiante = new Estudiante(nombre, calificaciones);
    estudiantes.push(nuevoEstudiante);
  }
  
  // Paso 4: Actualizar calificaciones de un estudiante
  function actualizarCalificaciones(nombre, nuevasCalificaciones) {
    const estudiante = estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
      estudiante.calificaciones = nuevasCalificaciones;
    } else {
      console.log("Estudiante no encontrado.");
    }
  }
  
  // Paso 5: Generar reporte de estudiantes
  function generarReporte() {
    console.log("Informe de Estudiantes:");
    estudiantes.forEach(estudiante => {
      console.log(`Nombre: ${estudiante.nombre}`);
      console.log(`Calificaciones: ${estudiante.calificaciones.join(", ")}`);
      console.log("-------------");
    });
  }
  
  // Ejemplo de uso
  agregarEstudiante("Isabela", [95, 88, 91]);
  actualizarCalificaciones("Pedro", [85, 80, 75]);
  generarReporte();
  


app.get('/', (req, res) => {
    res.send('hi')
});

app.listen(3001, ()=>{
    console.log('Servidor en 3001')
});