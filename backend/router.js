import express from "express";
import {ObtenerListas, CrearLista, ActualizarList, EliminarLista} from "./handlers.js"
import { ValCabecera, CuerpoVacio, FaltaId, UrlIncorrecta, TareaYaAgregada } from "./checkRequest.js";

const router = express.Router();

router.use(ValCabecera, express.json());

router.get("/api/tasks", ObtenerListas);

router.post("/api/tasks", CuerpoVacio, TareaYaAgregada, CrearLista);

router.put("/api/tasks/:id", CuerpoVacio, FaltaId, ActualizarList);

router.delete("/api/tasks/:id", FaltaId, EliminarLista);

router.use(UrlIncorrecta);

export default router;