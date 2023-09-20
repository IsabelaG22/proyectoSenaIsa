const express = require('express');
const app = express();

function crearInventario() {
    return [
        { nombre: "Zelda", cantidad: 10 },
        { nombre: "Minecraf", cantidad: 1 },
        { nombre: "Mario broos", cantidad: 20 },
        { nombre: "Terrori", cantidad: 13 },

    ]
}
const inventario = crearInventario();
console.log(inventario);



function modificarInventario(inventario, indice, nuevaCantidad) {
    if (indice => 0 && indice < inventario.length) {//indice ingresado mayor al indice de la longitud de lkos que verdaderamente hay
        inventario[indice].cantidad = nuevaCantidad
    } else {
        console.log("indice esta fuera de rango")

    }
}

modificarInventario(inventario, 3, 248);
console.log("inventario despues de modificado");
console.log(inventario)


function generarReporteInventario(inventario){
    let reporteHtml= '<h1>Reporte de inventario </h1><ul>';
    inventario.forEach(itemInventory =>{
        reporteHtml += `<li>Nombre del juego: ${itemInventory.nombre}, cantidad: ${itemInventory.cantidad}</li>`;
    })
    reporteHtml += '</ul>';
    return reporteHtml;

}






app.get('/', (req, res) => {
    res.send(generarReporteInventario(inventario))
});

app.listen(3001, ()=>{
    console.log('Servidor en 3001')
});