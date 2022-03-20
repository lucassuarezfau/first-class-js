//console.log("hola desde el archivo externo");

//1_ declaramos la variante
let hola;
//2_se le asigna valor a la variable
hola = 20;
console.log(hola);

//se le puede ahcer los dos pasos en una sola linea
let hola_segundo = 30;
console.log(hola_segundo);

//ejemplo practico de aplicacion
let gaseosas = 30;
let galletas = 40;
//formas de escribir en javascript
let totalItems = gaseosas + galletas; //camelCase
let hello_world; //snake_case
let Pascal_Case; //Pascal_Case
console.log(totalItems);

//TIPOS DE DATOS

//1_PRIMITIVOS

//a_NUMEROS
//para numeros grandes usar el guion bajo en vez del punto
let primero = 1_000_000;
console.log(primero);
//numeros flotante o decimales (se usa el punto)
let float = 2.25;
console.log(float);
//puedo hacer operaciones
console.log(primero + float);
console.log(primero - float);
console.log(primero * float);
console.log(primero / float);
console.log(float ** 2);

//ejemplo: carrito de vino
let priceWine = 200.3;
let totalWine = 3;
//para ser mas exactos con los numeros decimales, multiplicar por 100 y dividir por 100
let totalPrice = (priceWine * 100 * totalWine) / 100;
console.log(totalPrice.toFixed(2));
//toFixed= cantidad de decimales que quiero mostrar

//b_STRINGS O CADENAS DE TEXTO

//no se esccriben igual que los numeros
let firstString = "My first string"; //comillas dobles
let secondString = "My second string"; // comillas simples
let thirdString = "My third string"; //comillas invertidas
console.log(firstString);
console.log(secondString);
console.log(thirdString);
//mas comun comillas simples

let apostrofe = "D'alessandro";
console.log(apostrofe);

//opreaciones con strings concatenar textos

console.log(firstString + " " + secondString); //string vacio para poner espacio en la suma
console.log(`${firstString} ${secondString} ${primero}`); //otra forma de sumas letras

//c_BULEANOS ( VERDADERO O FALSO)

let is = true;
let isFalse = false;

//d_NULL (la variable no contiene ningun valor)
let iamNull = null;

//e_UNDEFINED
let iamUndefined;
console.log(iamUndefined);
//nunca poner undefined, siempre null para una variable que no cree
let otherVariable = null;

//otros : Symbol & BigInt

//caractetristicas de los datos primitivos
//a_ debilmente tipados : se le puede asignar varios tipos de datos y me muestra el ultimo que puse
let debilTipado = "hola mundo";
debilTipado = 30;
debilTipado = true;
debilTipado = "otra string";
console.log(debilTipado);

//ejemplo de aplicacion
let otraVariable;
otraVariable = false;

//b_ son inmutables
let bar = "bar";
console.log("bar inmutable ===>", bar);
bar.toUpperCase(); //se tendria que poner BAR
console.log("bar despues de la funcion", bar); //no se pone en mayusculas porque es inmutable
//solucion
let barMayus = bar.toUpperCase();
console.log("bar mayuscula ===>", barMayus);

//Pregunta de entrevista tecnica
//EN LA CONSOLA VA A SALIR "Rolling" porque
//los valores primitivos no se copian por referencia, sino por el valor que almacenan
let rolling = "Rolling";
let code = rolling;
rolling = "code string";
console.log("RESPUESTA DEFINITIVA ===>", code);
//como se lee de arriba a abajo, no importa que lo alla reasigando a code string porque ya leyo la linea de arriba.

let a = 20;
let b = a;
a = 25;
console.log("respuesta ===>", b);
//¿cuanto vale b? = 20

//2_COMPUESTOS O DATOS NO PRIMITIVOS
//moldeamos objetos de la vida real, usamos las llaves para describiri sus caracteristicas
let corolla = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  maxSpeed: 200,
  engine: 1.8,
  km: 0,
  wheels: 4,
  isAuto: true,
  berforeCar: {
    model: "etios",
  },
};
let corolla2 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
// IMPORTANTE: los datos compuestos SI se copian por referencia

//dato primitivo => creamos la cariable => almacenamos el hola mundo en la memoria del navegador. La memoria se la conoce como memori Heap
//let variable = 1 ; la variable sera asignado en el espacio A1

//dato no primitivo => creamos el objeto => se almacena en el Call Stack en el B33
//el memory heap va a decir que A1 (Corolla) va a apuntar a = B33

//callstack
/*
B33 => {
    brand: "Toyota",
  model: "Corolla",
  year: 2020,
  maxSpeed: 200,
  engine: 1.8,
  km: 0,
  wheels: 4,
  isAuto: true,
  berforeCar: {
    model: "etios",
}
*/

//memory Heap
// A1 => B33
//A2 (corolla2)=> B34
// no se compara los valores sino las referencias entonces B33 == B34 no son iguales => es false

let text1 = "texto";
let text2 = "texto";

//A4 text1 = "texto";
//A5 text2 = "texto";
//comparacion en consola text1 == text2 ===> true, apunta a comparar si esta lo mismo en la memoria

// la diferencia entre datos primitivos y no primitivos : los primitivos se copian por valor en memoria y los no primitivos se copian por referencia en la memoria

//b_ Array o listas

let menuItems = ["pase sanitario", "politica", "policiales"];
let arrayDisorder = [1, true, corolla, "hola mundo"];

// ejemplo se puede calcular un carrito de compra
//let shoppingCart = [objeto1, objeto2, objeto3];

//funciones prederteminadas por el lenguaje
//funcion : pieza de codigo preexistente que me permite realizar alguna operacion con un valor
//para las string

//todo en minuscula
let myStr = "Hola Mundo";
console.log("MINUSCULAS ===>", myStr.toLowerCase());

//todo a mayusculas
console.log("MAYUSCULAS ===>", myStr.toUpperCase());
//SE PONE PARENTESIS AL FINAL PORQUE ES UN METODO Y NO UNA PROPIEDAD

//cantidad de caracteres de una string
console.log("CANTIDAD DE CARACTERES ===>", myStr.length);

//quitar el primer caracter de una string
console.log("PRIMER CARACTER ===>", myStr.charAt(1));
//entre parentesis el numero de la posicion que quiero ver, siempre se empiza con el 0 , por eso aca se toma la "o" de hola

//quitar el ultimo
console.log("ULTIMO CARACTER ===>", myStr.charAt(myStr.length - 1));

//cortar la palabra hola
console.log("QUIERO MOSTRAR HOLA ===>", myStr.substring(0, 4));
