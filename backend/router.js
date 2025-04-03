import express from "express";
import {ObtenerListas, CrearLista, ActualizarList, EliminarLista} from "./handlers.js"

const router = express.Router();

router.use((req, res, next) => {
    let body = '';

    req.on("data", chunck => {
        body += chunck.toString();
    })

    req.on("end", () => {
        req.body = JSON.parse(body);
        next();
    })

});

router.get("/", (req, res, next) => {
    res.send("<h1>Bienvenido</h1>");
});

router.get("/api/tasks", ObtenerListas);

router.post("/api/tasks", CrearLista);

router.put("/api/tasks/:id", ActualizarList);

router.delete("/api/tasks/:id", EliminarLista);

export default router;