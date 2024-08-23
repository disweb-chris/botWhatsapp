const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(bodyParser.json());

// Ruta para recibir mensajes (Webhook)
app.post('/webhook', (req, res) => {
    console.log(req.body);
    res.status(200).send('Webhook recibido');
});

// Puerto en el que escucha Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
