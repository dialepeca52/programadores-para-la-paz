const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor de Diego Peña funcionando correctamente');
        });

app.listen(3000, () => {
    console.log('Servidor de Diego Peña funcionando correctamente en el puerto 3000');
});