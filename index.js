const express = require('express');
const app = express();

const PORT = 3000; // Cambia al puerto que prefieras

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send('Servidor en la red WiFi');
});

// Escuchar en 0.0.0.0 para aceptar conexiones de toda la red
app.listen(PORT, '192.168.1.8', () => {
    console.log(`Servidor corriendo en http://192.168.1.8:${PORT}`);
});
