let mes =1
const mesdeseguimiento =6
let propuestasatendidas = 0

console.log("Seguimiento de propuestas") 

while (mes <= mesdeseguimiento) {
    console.log ("Mes de seguimiento número:", mes)
    propuestasatendidas = propuestasatendidas + 2
    console.log("Propuestas atendidas hasta ahora:", propuestasatendidas)
    mes = mes + 1
}

console.log("Seguimeinto comunitario finalizado")
console.log("Total de propuestas atendidas", propuestasatendidas)
