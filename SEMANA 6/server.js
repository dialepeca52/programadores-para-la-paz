const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.post('/incidencia', (req, res) => {

    const tipo = req.body.tipo;
    const descripcion = req.body.descripcion;
  
    res.json({
      mensaje: "Incidencia registrada",
      tipo: tipo,
      descripcion: descripcion
    });
  
  });

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

(async () => {

    const respuesta = await fetch("http://localhost:3000/incidencia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tipo: "Iluminación pública",
        descripcion: "La comunidad reporta que una lámpara del parque no funciona desde hace varios días."
      })
    });
  
    const datos = await respuesta.json();
  
    console.log("Respuesta del servidor:");
    console.log(datos);
  
  })();