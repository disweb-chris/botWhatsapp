const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Ruta para la raíz "/"
app.get('/', (req, res) => {
    res.send('¡Bienvenido al bot de WhatsApp!');
});

// Ruta para recibir mensajes de Webhook
app.post('/webhook', (req, res) => {
    console.log(req.body);
    res.status(200).send('Webhook recibido');
});

// Puerto en el que escucha Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
