const comunidades = ["Barrio La Paz", "Comunidad Escolar", "Junta Juvenil"]

console.log("Primer ejemplo de array")
console.log("Un array permite guardar varios datos en una sola variable.")
console.log("Comunidades registradas:")
console.log(comunidades)

let frutas = ["manzana", "pera", "mango", "lulo"
];
console.log(frutas);

for (let fruta of frutas) {
    console.log(fruta);
}

let razas = ["hampshire","romney marsh", 
    "moro colombiano", "khatadin"];

for (let raza of razas) {
    console.log(raza);
}

let letras = ["a","b","c","d","e","f","g","h"];

for (let letra of letras) {
    console.log(letra);
}
console.log(letras.length);

let longitud = letras.length;
console.log(longitud);

console.log("corramos con while");
let intento=0;
while (intento<longitud){
    console.log("letra",letras[intento], 
        "posicion", intento);
        intento++; 
}

///Lo de arriba y lo de abajo son equivalentes
console.log("Una forma de escribir menos código para lo mismo")
///for tradicional:
//for(Definición de una variable;condición que se cumple;Forma como incrementa)
for (let intento = 0; intento < longitud; intento++) {
    console.log("letra", letras [intento], "posicion", intento);
}

//tablas de multiplicar del 2
const Multiplicando =2;
for (let bucles =1; bucles <= 10; bucles++) {
    console.log(Multiplicando,"x", bucles, "=", Multiplicando*bucles);
}