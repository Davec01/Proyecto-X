const express = require("express");
const authRutas = require("./rutas/authRutas");
const tweetRutas = require("./rutas/tweetRutas");
const seguirRutas = require("./rutas/seguirRutas");

const app = express();
const puerto = 3000;

app.use(express.json()); // Asegúrate de tener esto

app.get("/", (req, res) => {
    res.send("Bienvenido a la API de Proyecto X");
});

app.use("/api/auth", authRutas);
app.use("/api/tweets", tweetRutas);
app.use("/api/seguir", seguirRutas);

app.listen(puerto, () => {
    console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});
