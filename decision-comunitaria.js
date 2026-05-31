const propuesta = "Mejorar la comunicación del barrio"
let tieneLenguajeClaro = true
let pideDatosNecesarios = true
let tienebuenaintencion = true

console.log("Revisión de propuesta comunitaria")
console.log("Propuesta:", propuesta)

if (tieneLenguajeClaro === true && pideDatosNecesarios === true &&
  tienebuenaintencion === false) {
  console.log("La propuesta está lista para ser compartida con la comunidad.")
} if (tieneLenguajeClaro === true && pideDatosNecesarios === true &&
  tienebuenaintencion === true) {
  console.log("La propuesta está excesivamente bien.")
} else {
  console.log("La propuesta no está lista para ser compartida con la comunidad.")
}
