function evaluarInformacion(tieneFuente, estaVerificada) {
    if (tieneFuente === true && estaVerificada === true) {
      return "La información puede compartirse con responsabilidad."
    } else {
      return "La información debe revisarse antes de compartirse."
    }
  }
  
  const resultado = evaluarInformacion(true, true)
  
  console.log("Evaluación de información:")
  console.log(resultado)
  