const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor de Diego Peña activo');
});

app.get('/saludo', (req, res) => {
    res.send('Holiwis mis panitas de programadores para la paz');
});

app.get('/mensaje/:nombre', (req,
     res) => {
    const nombre = req.params.nombre;
       res.send('HOLIWIS ' + nombre + " :)");
});

app.get('/discurso', (req, res) => {
    res.send('Sólo Cepeda en esta Monda');
});

let mensaje = "Reporte de prueba enviado"

app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({ 
        Estado: 'Reporte recibido mi perrito: ' ,
         mensaje: mensaje 
        });
});


app.listen(3000, () => {
    console.log('Servidor de Diego Peña activo en el puerto 3000');
});



