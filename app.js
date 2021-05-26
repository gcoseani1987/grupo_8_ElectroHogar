const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('Servidor corriendo'))


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/carritoCompras', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carritoCompras.html'));
});

app.get('/detalleProducto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalleProducto.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'));
});

app.get('/categoria/aires', (req, res) => {
    res.sendFile(path.join(__dirname, './views/categoriaAire.html'));
});

app.get('/categoria/hornos', (req, res) => {
    res.sendFile(path.join(__dirname, './views/categoriaHorno.html'));
});

app.get('/categoria/heladeras', (req, res) => {
    res.sendFile(path.join(__dirname, './views/categoriaHeladera.html'));
});

app.get('/categoria/lavarropas', (req, res) => {
    res.sendFile(path.join(__dirname, './views/categoriaLavarropa.html'));
});

app.get('/categoria/televisores', (req, res) => {
    res.sendFile(path.join(__dirname, './views/categoriaTele.html'));
});



