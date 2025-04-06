import express from "express";
import router from "./router.js";
import cors from "cors"

export function StartServer(port, frontend_url) {

    const app = express();
    
    app.use(cors({
        origin: frontend_url,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }))

    app.use("/", router);

    const server = app.listen(port, () => {
        const { port } = server.address();
        console.log("Se está escuchando");
        console.log("http://localhost:" + port)
    });

}