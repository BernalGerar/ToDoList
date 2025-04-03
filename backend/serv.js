import express from "express";

export function StartServer(port) {

    const app = express();

    app.use("/api", (rep, res) => {
        res.send("hola, mundo!")
    });

    const server = app.listen(port, () => {
        console.log("Se está escuchando");
        console.log("http://localhost:" + server.address().port)
    });

}