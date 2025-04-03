import express from "express";
import router from "./router.js";

export function StartServer(port) {

    const app = express();

    app.use("/", router);

    const server = app.listen(port, () => {
        const { port } = server.address();
        console.log("Se está escuchando");
        console.log("http://localhost:" + port)
    });

}