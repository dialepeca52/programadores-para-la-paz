function evaluarPropuestaComunitaria(tieneLenguajeClaro, pideSoloDatosNecesarios) {
    if (tieneLenguajeClaro === true && pideSoloDatosNecesarios === true) {
      return "La propuesta está lista para ser compartida con la comunidad."
    } else {
      return "La propuesta debe ajustarse antes de publicarse."
    }
}

const resultado = evaluarPropuestaComunitaria(false, true)

console.log("Evaluación de propuesta comunitaria:")
console.log(resultado)
