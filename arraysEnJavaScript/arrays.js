//EJEMPLOS: ARRAYS, VECTORES

let numeros = ["corona", "aguila", "pilsen", "red", "club colombia"] // esto es un array
let wines = ["merlot", "cabernet"]

//OBJETOS, EJEMPLO:
const beers = [{
    name: "Heinken",
    price: 3.40,
    alcohol: 4.5
}, {
    name: "Club",
    price: 4.20,
    alcohol: 1.3
}, {
    name: "Pilsen",
    price: 4.50,
    alcohol: 6.9
}];

const numbers = [1, 2, 3, 4];


const juntos = [...numbers, ...wines]
console.log(juntos)
function suma(a, b, c, d) {
    return a + b + c + d
}
console.log(suma(...numbers) + ' suma')
//... Los tres puntos  es un operador expret y es para acceder a los indices que tenga el conjunto que le enviemos al lado de este
//COPIA DE UN ARRAY, para hacer una copia de un array puedo utiliza el expret es decir los 3 puntos ...

// //POSICIONES-0,1,2,3,4,5
//console.log(numeros.length); //el metodo length nos permite ver la longitud de nuestra coleccion numeros
// console.log(numeros[3]);//acceder a un numero especifico que deseo ver por medio de su posicion 
// console.log(numeros.at(2))//acceder a un numero especifico que deseo ver por medio de su posicion con el metodo at y si pongo numeros negativos se vadevolver el array es decir me los muestra al reves desde el ultimo

// MUTABLE: MODIFICA LO QUE TENGO ME CAMBIA EL ESTADO DE EL ARRAY
numeros.push(16)// agregar al final
numeros.unshift("isa")//agregar al inicio
numeros.splice(2, 2, "four loko")//para eliminar elementos de la posicion (tal, los que deseo eliminar, cual deseo agregar cuando esos se eliminen) eliminar y sustituir si pongo 0 en la mitad es porque solo deseeo recorrer la lista
let n = numeros.pop() // elimina el ultimo
let n2 = numeros.shift()//elimina el primero
// console.log(n)
// console.log(n2)
numeros.fill("pato", 1, 3)//segun el ultimo parametro que indique me modifica los elementos que esten entre ese indice y lo cambia por PATO


//INMUTABLES: No modifica

let alcoholDrinks = numeros.concat(wines) // Junta los dos arrays
console.log(alcoholDrinks.indexOf("merlot"))//me indica en que indice esta el elemento que filtre 'MERLOT'

const beer2 = numeros.slice(0, -3);//me muestra las pociones segun el rango de indices que le de deseo que me muestre desde el 0 hasta el 3, si va en - empieza de atras para adelante pero me crea un array nuevo con estos datos es decir no me modifica el primero 



//mostrarNumeros(numeros)
mostrarEnHtml("array1", numeros)
mostrarEnHtml("array2", beer2)
mostrarEnHtml2("array3", beers)




// function mostrarNumeros(array){
// for (let i=0; i<numeros.length; i++){ //i inicia en cero y decimos hasta que i sea menor a la longitud de numeros que es 5 pare, el i++ se va sumando en cada vuelta hasta llegar a 5
//     console.log(numeros[i]);
// }}


function mostrarEnHtml(elementos, array) { //funcion para mostrar datos en la pantalla 
    document.getElementById(elementos).innerHTML = " ";

    for (let i = 0; i < array.length; i++) {
        document.getElementById(elementos).innerHTML +=
            `<div>${array[i]}</div>`
    }
}


function mostrarEnHtml2(elementos, array) { //funcion para mostrar datos en la pantalla 
    document.getElementById(elementos).innerHTML = " ";

    for (let i = 0; i < array.length; i++) {
        document.getElementById(elementos).innerHTML +=
            `<div>${array[i].name}, ${array[i].price}, ${array[i].alcohol}</div>`
    }
}

// for (let i=numeros.length -1; i >= 0; i--){ //al revez del 6 al 1
//     console.log(numeros[i]);
// }




// https://www.youtube.com/watch?v=LYF4FeJyccc