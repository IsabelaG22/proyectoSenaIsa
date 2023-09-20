const express = require('express');
const app = express();

function puntuaciones() {
    return [2, 16, 4, 100, 34]
}
const puntuacion = puntuaciones();
console.log(puntuacion);



function modificarPuntos(indice, sumaPuntos) {
    sumaPuntos = puntuacion.push(sumaPuntos);
  

}
// Función para ordenar el vector de puntuaciones de mayor a menor
function ordenarPuntuaciones() {
    puntuacion.sort((a, b) => b - a);
  }
  // Función para visualizar las puntuaciones más altas
function visualizarPuntuaciones() {
    console.log("Puntuaciones más altas:");
    for (let i = 0; i < puntuacion.length; i++) {
      console.log(`Puntuación ${i + 1}: ${puntuacion[i]}`);
    }
  }
  
  // Ejemplo de uso
  modificarPuntos(110); // Agregar una nueva puntuación
  ordenarPuntuaciones(); // Ordenar las puntuaciones
  visualizarPuntuaciones(); // Mostrar las puntuaciones ordenadas
  

// function generarReporteInventario(inventario){
//     let reporteHtml= '<h1>Reporte de inventario </h1><ul>';
//     inventario.forEach(itemInventory =>{
//         reporteHtml += `<li>Nombre del juego: ${itemInventory.nombre}, cantidad: ${itemInventory.cantidad}</li>`;
//     })
//     reporteHtml += '</ul>';
//     return reporteHtml;

// }






app.get('/', (req, res) => {
    res.send(generarReporteInventario(inventario))
});

app.listen(3001, ()=>{
    console.log('Servidor en 3001')
});